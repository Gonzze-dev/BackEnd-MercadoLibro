import { BaseEntity,
        Column,
        Entity,
        JoinColumn,
        ManyToOne,
        PrimaryGeneratedColumn} from "typeorm";

import { Orden } from "./Orden";
import { Libro } from "./Libro";

@Entity()
export class Orden_detalle extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'decimal',
        precision: 9, 
        scale: 2,
    })
    precio!: number;

    @Column()
    cantidad!: number;

    @ManyToOne((type) => Orden, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_orden'})
    orden!: Orden;

    @ManyToOne((type) => Libro, (libro) => libro.isbn, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({name: 'isbn'})
    libro!: Libro[];
}
