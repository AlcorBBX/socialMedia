import { Base } from "src/utils/base";
import { Column, Entity, OneToMany } from "typeorm";
import { SubscriptionsEntity } from "./subscriptions.entity";

@Entity('User')
export class UserEntity extends Base {
    @Column({unique:true})
    email:string

    @Column({select:false})
    password:string

    @Column({default: ''})
    name:string

    @Column({default: false, name: 'is_verified'})
    isVerified:string

    @Column({default: 0, name: 'subscribers_count'})
    subscribersCount?:string

    @Column({default: '', type: 'text'})
    description:string

    @Column({default: ''})
    location:string

    @Column({default: '', name: 'avar_path'})
    avarPath:string
    

    @OneToMany(() => SubscriptionsEntity, sub => sub.fromUser)
    subscriptions: SubscriptionsEntity[]

    @OneToMany(() => SubscriptionsEntity, sub => sub.toUser)
    subscribers: SubscriptionsEntity[]
}