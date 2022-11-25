import {BaseEntity, 
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        PrimaryColumn } from "typeorm";
import { Provincia } from "./Provincia";


@Entity()
export class Ciudad extends BaseEntity
{
    @PrimaryColumn()
    cp!: number;

    @Column()
    nombre!: string;

    @ManyToOne((type) => Provincia, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_provincia'})
    provincia!: number;
}
