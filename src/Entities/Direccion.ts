import { Field, ID, Int, ObjectType } from "type-graphql";

import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne,
        PrimaryGeneratedColumn} from "typeorm";

import { Ciudad } from "./Ciudad";
    
import { Usuario } from "./Usuario";

@ObjectType()
@Entity()
export class Direccion extends BaseEntity
{
    
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    direccion!: string;

    @Field()
    @Column({
        nullable: true
    })
    infoAdicional: string;

    @Field(type => Int)
    @Column({type: 'bigint'})
    dni!: number;

    @Field({
        nullable: true
    })
    @Column({
        nullable: true
    })
    telefono: string;

    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    @Field(type => Ciudad)
    @ManyToOne((type) => Ciudad, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({name: 'cp'})
    ciudad!: Ciudad;
}
