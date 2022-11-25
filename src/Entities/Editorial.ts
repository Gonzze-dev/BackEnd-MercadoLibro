import { BaseEntity,
        Column, 
        Entity, 
        PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Editorial extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true
    })
    nombre!: string;
}
