import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        JoinTable, 
        ManyToMany, 
        OneToMany, 
        OneToOne, 
        PrimaryColumn } from "typeorm";
import { Autor } from "./Autor";
    
import { Editorial } from "./Editorial";
import { Idioma } from "./Idioma";
import { Opinion } from "./Opinion";
import { Puntuacion } from "./Puntuacion";
import { Tema } from "./Tema";

@Entity()
export class Libro extends BaseEntity
{
    
    @PrimaryColumn()
    isbn!: string;

    @Column('text')
    url_imagen!: string;

    @Column()
    titulo!: string;

    @Column()
    fecha_edicion!: string;

    @Column({
        type: 'decimal',
        precision: 10, 
        scale: 2,
    })
    precio!: number;

    @Column()
    stock!: number;

    @Column()
    descripcion!: string;

    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    fecha_ingreso!: Date;

    @OneToOne((type) => Editorial, {
        onUpdate: 'CASCADE'
    })
    @Column({name: 'id_editorial'})
    editorial!: number;

    @OneToOne((type) => Idioma, {
        onUpdate: 'CASCADE'
    })
    @Column({name: 'id_idioma'})
    idioma!: number;

    @ManyToMany((type) => Tema, {
        onUpdate: 'CASCADE'
    })
    @JoinTable({
        name: "asignar_tema",
        joinColumn: {
            name: 'id_tema'
        },
        inverseJoinColumn: {
            name: 'isbn'
        }
    })
    tema!: Tema[];

    @ManyToMany((type) => Autor, {
        onUpdate: 'CASCADE'
    })
    @JoinTable({
        name: "escrito_por",
        joinColumn: {
            name: 'id_autor'
        },
        inverseJoinColumn: {
            name: 'isbn'
        }
    })
    @JoinColumn({
        name: 'id_autor'
    })
    autor!: Autor[];
    
    @OneToMany((type) => Opinion, opinion => opinion.opinion)
    public opinion: Opinion[];

    @OneToMany((type) => Puntuacion, puntuacion => puntuacion.usuario)
    public puntuacion: Puntuacion[];
}
