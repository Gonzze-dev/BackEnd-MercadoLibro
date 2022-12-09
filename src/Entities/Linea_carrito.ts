
import { Field, ID, Int, ObjectType } from "type-graphql";
import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        PrimaryGeneratedColumn } from "typeorm"
import { Cupon } from "./Cupon";
import { Libro } from "./Libro"
import { Usuario } from "./Usuario"

@ObjectType()
@Entity()
export class Linea_carrito extends BaseEntity
{
    @Field(type => ID)
    @PrimaryGeneratedColumn()
    nro_linea!: number;

    @Field(type => Int)
    @Column()
    cantidad!: number;

    @Field(type => Cupon, {nullable: true})
    @ManyToOne((type) => Cupon, (Cupon) => Cupon.codigo_cupon, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({name: 'codigo_cupon'})
    cupon: Cupon;

    
    @Field(type => Libro, {nullable: true})
    @ManyToOne((type) => Libro, (libro) => libro.isbn, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({name: 'isbn'})
    libro: Libro;

    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_usuario'})
    usuario: Usuario;

}