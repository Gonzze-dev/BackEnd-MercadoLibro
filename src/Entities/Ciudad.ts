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

    @ManyToOne((type) => Provincia, (provincia) => provincia.id, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({name: 'id_provincia'})
    provincia!: Provincia;
}
