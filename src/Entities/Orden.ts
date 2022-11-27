import { BaseEntity,
        Column,
        Entity,
        JoinColumn,
        ManyToOne,
        OneToMany,
        OneToOne,
        PrimaryGeneratedColumn} from "typeorm";

import { Cupon } from "./Cupon";
import { Direccion_entrega } from "./Direccion_entrega";
import { Orden_detalle } from "./Orden_detalle";
import { Usuario } from "./Usuario";

@Entity()
export class Orden extends BaseEntity
{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column(
        {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP'
        }
    )
    fecha!: Date;

    @Column({
        type: 'decimal',
        precision: 18, 
        scale: 2,
    })
    total!: number;

    @OneToOne((type) => Cupon, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({name: 'codigo_cupon'})
    cupon!: Cupon;

    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    @ManyToOne((type) => Direccion_entrega, (direccion) => direccion.id, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_direccion_entrega'})
    direccion_entrega!: Direccion_entrega;

    @OneToMany(() => Orden_detalle, (orden_detalle) => orden_detalle.orden, {
        onUpdate: 'CASCADE',
        eager: true
    })
    orden_detalle!: Orden_detalle[];
}
