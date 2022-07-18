import { Base } from "src/utils/base";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('Subscription')
export class SubscriptionsEntity extends Base {
    @ManyToOne(() => UserEntity, user => user.subscriptions)
    @JoinColumn({name: 'from_user_id'})
    fromUser:UserEntity

    @ManyToOne(() => UserEntity, user => user.subscriptions)
    @JoinColumn({name: 'to_user_id'})
    toUser:UserEntity
}