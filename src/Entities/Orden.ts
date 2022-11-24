import { Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn} from "typeorm";

import { Cupon } from "./Cupon";
import { Direccion_entrega } from "./Direccion_entrega";
import { Usuario } from "./Usuario";

@Entity()
export class Orden 
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
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'codigo_cupon'})
    codigo_cupon!: Cupon;

    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    @ManyToOne((type) => Direccion_entrega, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_direccion_entrega'})
    direccion_entrega!: Direccion_entrega;
}
