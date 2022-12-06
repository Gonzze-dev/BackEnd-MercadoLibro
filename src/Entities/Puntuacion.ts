import { type } from "os";
import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        PrimaryColumn } from "typeorm"
import { Libro } from "./Libro"
import { Usuario } from "./Usuario"

@ObjectType()
@Entity()
export class Puntuacion extends BaseEntity
{
    @PrimaryColumn()
    usuario_libro: string;
    
    @Field(type => Int, {nullable: true})
    @Column()
    puntuacion!: number;

    @Field(type => Usuario, {nullable: true})
    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    @ManyToOne((type) => Libro, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'isbn'})
    libro!: Libro;
}