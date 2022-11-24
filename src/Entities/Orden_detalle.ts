import { Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn} from "typeorm";

import { Orden } from "./Orden";
import { Libro } from "./Libro";

@Entity()
export class Orden_detalle
{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'decimal',
        precision: 9, 
        scale: 2,
    })
    preico!: number;

    @Column()
    cantidad!: number;

    @ManyToOne((type) => Orden, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_orden'})
    orden!: Orden;

    @ManyToOne((type) => Libro, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'isbn'})
    libro!: Libro;
}
