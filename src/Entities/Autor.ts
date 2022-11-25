import { BaseEntity,
        Column, 
        Entity, 
        PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Autor extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true
    })
    nombre!: string;
}
