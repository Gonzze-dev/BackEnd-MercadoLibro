import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        PrimaryColumn } from "typeorm"
import { Libro } from "./Libro"
import { Usuario } from "./Usuario"

@Entity()
export class Puntuacion extends BaseEntity
{
    @PrimaryColumn()
    usuario_libro: string;

    @Column()
    puntuacion!: number;

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