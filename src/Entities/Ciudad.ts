import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Provincia } from "./Provincia";


@Entity()
export class Ciudad {
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
