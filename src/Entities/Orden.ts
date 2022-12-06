import { Field, Float, ID, ObjectType } from "type-graphql";
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

@ObjectType()
@Entity()
export class Orden extends BaseEntity
{
    
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(type => String)
    @Column(
        {
            type: 'timestamp',
            default: () => 'CURRENT_TIMESTAMP'
        }
    )
    fecha!: Date;
    
    @Field(type => Float)
    @Column({
        type: 'decimal',
        precision: 18, 
        scale: 2,
    })
    total!: number;

    @Field(type => Cupon, {nullable: true})
    @OneToOne((type) => Cupon, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({name: 'codigo_cupon'})
    cupon?: Cupon;


    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    @Field(type => Direccion_entrega, {nullable: true})
    @ManyToOne((type) => Direccion_entrega, (direccion) => direccion.id, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_direccion_entrega'})
    direccion_entrega!: Direccion_entrega;
    
    @Field(type => Orden_detalle, {nullable: true})
    @OneToMany(() => Orden_detalle, (orden_detalle) => orden_detalle.orden, {
        onUpdate: 'CASCADE',
        eager: true
    })
    orden_detalle!: Orden_detalle[];
}
