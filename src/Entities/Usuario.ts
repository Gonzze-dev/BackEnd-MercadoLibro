import { Field, ID, ObjectType } from 'type-graphql';
import {BaseEntity,
        Column,
        Entity,
        JoinTable,
        ManyToMany,
        OneToMany,
        PrimaryGeneratedColumn} from 'typeorm'

import { Libro } from './Libro'
import { Linea_carrito } from './Linea_carrito';
import { Opinion } from './Opinion'
import { Orden } from './Orden';
import { Puntuacion } from './Puntuacion'

@ObjectType()
@Entity()
export class Usuario extends BaseEntity
{

    @Field(type => ID)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    nombre!: string;

    @Field()
    @Column({
        unique: true
    })
    correo!: string;

    @Field()
    @Column()
    contrasenia!: string;

    @Field()
    @Column({
        default: false
    })
    admin: boolean;

    @Field(type => [Libro], {nullable: true})
    @ManyToMany((type) => Libro, {
        onUpdate: 'CASCADE',
    })
    @JoinTable({
        name: "favorito",
        joinColumn:
        {
            name: 'id_usuario'
        },
        inverseJoinColumn:
        {
            name: 'isbn'
        }
    })
    favorito?: Libro[];

    
    @OneToMany((type) => Opinion, opinion => opinion.usuario)
    public opinion: Opinion[];

    @OneToMany((type) => Puntuacion, puntuacion => puntuacion.usuario)
    public puntuacion: Puntuacion[];

    @Field(type => [Orden], {nullable: true})
    @OneToMany((type) => Orden, orden => orden.usuario)
    public orden?: Orden[];

    @Field(type => [Linea_carrito], {nullable: true})
    @OneToMany((type) => Linea_carrito, linea_carrito => linea_carrito.usuario)
    public carrito?: Linea_carrito[];
}