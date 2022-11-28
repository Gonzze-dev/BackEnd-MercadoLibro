import { BaseEntity,
        Column, 
        Entity, 
        PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tema extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true
    })
    nombre!: string;

    @Column()
    url_imagen: string;
}
