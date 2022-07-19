import { BadRequestException, Injectable, NotFoundException, Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { SubscriptionsEntity } from './subscriptions.entity';
import { userDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
        @InjectRepository(SubscriptionsEntity)
        private readonly subscriptionRepository: Repository<SubscriptionsEntity>
    ){}

    //by-id
    async byId(id:number){
        const user = await this.userRepository.findOne({
            where:{
                id
            },
            relations: {
                subscriptions: {
                    toUser:true
                }
            },
            order: {
                createAt: 'DESC'
            }
        })
        if(!user) throw new NotFoundException('Пользователь не найден!')
        return user
    }

    //update
    async updateProfile(id:number, dto:userDto){
        const user = await this.byId(id)

        const isSameUser = await this.userRepository.findOneBy({email: dto.email})
        if (isSameUser && id !== isSameUser.id) throw new BadRequestException('Email занят!')

        // if(dto.password){
        //     const salt = await genSalt(10)
        //     user.password = await Hash(dto.password, salt)
        // }

        user.email = dto.email
        user.name = dto.name
        user.description = dto.description
        user.avatarPath = dto.avatarPath

        return this.userRepository.save(user)
    }

    //subscribe
    async subscribe(id:number, userId:number){
        const data = {
            toUser: {id: userId},
            fromUser: {id}
        }
        const isSubscribed = await this.subscriptionRepository.findOneBy(data)

        if(!isSubscribed){
            const newSubscription = await this.subscriptionRepository.create(data)
            await this.subscriptionRepository.save ((newSubscription))

            return true
        }

        await this.subscriptionRepository.delete(data)
        return false
    }

    //getAll
    async getAll(){
        return this.userRepository.find()
    }
}
