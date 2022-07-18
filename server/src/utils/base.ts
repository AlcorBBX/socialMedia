import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export abstract class Base{
    @PrimaryGeneratedColumn()
    id:number

    @CreateDateColumn({name: 'create_at'})
    createAt:Date

    @UpdateDateColumn({name: 'update_at'})
    updateAt:Date
}