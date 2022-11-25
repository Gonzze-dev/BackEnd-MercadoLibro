import { BaseEntity,
        Column,
        Entity,
        PrimaryColumn,
        } from "typeorm";


@Entity()
export class Cupon extends BaseEntity
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
