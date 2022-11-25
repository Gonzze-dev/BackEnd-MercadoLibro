import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        PrimaryGeneratedColumn } from "typeorm";
import { Pais } from "./Pais";

@Entity()
export class Provincia extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @ManyToOne((type) => Pais, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_pais'})
    pais!: number;
}
