import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        PrimaryGeneratedColumn } from "typeorm"
import { Libro } from "./Libro"
import { Usuario } from "./Usuario"

@Entity()
export class Linea_carrito extends BaseEntity
{
    @PrimaryGeneratedColumn()
    nro_linea!: number;

    @Column()
    cantidad!: number;
    
    @ManyToOne((type) => Libro, (libro) => libro.isbn, {
        onUpdate: 'CASCADE',
        eager: true
    })
    libro: Libro;

    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE',
    })
    @JoinColumn({name: 'id_usuario'})
    usuario: Usuario;

}