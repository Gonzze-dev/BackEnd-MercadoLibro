import { Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn} from "typeorm";

import { Direccion_entrega } from "./Direccion_entrega";

import { Usuario } from "./Usuario";

@Entity()
export class Cupon 
{
    @PrimaryColumn()
    codigo_cupon!: string;

    @Column({
        type: 'decimal',
        precision: 3, 
        scale: 2,
    })
    porc_descuento!: number;

    @Column({
        default: false
    })
    utilizado!: Boolean;
}
