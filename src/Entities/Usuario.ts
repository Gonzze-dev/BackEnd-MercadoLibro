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

@Entity()
export class Usuario extends BaseEntity
{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;

    @Column({
        unique: true
    })
    correo!: string;

    @Column()
    contrasenia!: string;

    @Column({
        default: false
    })
    admin: boolean;

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
    favorito: Libro[];

    @OneToMany((type) => Opinion, opinion => opinion.usuario)
    public opinion: Opinion[];

    @OneToMany((type) => Puntuacion, puntuacion => puntuacion.usuario)
    public puntuacion: Puntuacion[];

    @OneToMany((type) => Orden, orden => orden.usuario)
    public orden: Orden[];

    @OneToMany((type) => Linea_carrito, linea_carrito => linea_carrito.usuario)
    public carrito: Linea_carrito[];
}