import { Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        PrimaryGeneratedColumn } from "typeorm";
import { Pais } from "./Pais";

@Entity()
export class Provincia {
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
