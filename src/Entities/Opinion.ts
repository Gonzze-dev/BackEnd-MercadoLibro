import {Column, 
        Entity,
        ManyToOne,
        PrimaryColumn,
        } from 'typeorm';
import { Libro } from './Libro';
import { Usuario } from './Usuario';

@Entity()
export class Opinion
{
    @PrimaryColumn()
    usuario_libro: string;

    @Column('text')
    opinion!: string;

    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE',
    })
    usuario: Usuario;

    @ManyToOne((type) => Libro, {
        onUpdate: 'CASCADE',
    })
    libro: Libro;
}