import {Column, 
        Entity, 
        JoinTable, 
        ManyToMany, 
        OneToMany, 
        PrimaryGeneratedColumn} from 'typeorm'
import { Libro } from './Libro'
import { Opinion } from './Opinion'
import { Puntuacion } from './Puntuacion'

@Entity()
export class Usuario
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

    @Column({
        nullable: true
    })
    telefono: string;

    @ManyToMany((type) => Libro, {
        onUpdate: 'CASCADE',
    })
    @JoinTable({
        name: "favorito"
    })
    libro: Libro[];

    @OneToMany((type) => Opinion, opinion => opinion.usuario)
    public opinion: Opinion[];

    @OneToMany((type) => Puntuacion, puntuacion => puntuacion.usuario)
    public puntuacion: Puntuacion[];
}