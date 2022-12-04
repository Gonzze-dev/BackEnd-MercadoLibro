import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        JoinTable, 
        ManyToMany, 
        ManyToOne, 
        OneToMany,
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

    @Column({
        type: 'decimal',
        precision: 4, 
        scale: 2,
        nullable: true
    })
    descuento: number;

    @ManyToOne(() => Editorial, (editorial) => editorial.id,
    {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({
        name: 'id_editorial'
    })
    editorial!: Editorial;

    @ManyToOne(() => Idioma, (idioma) => idioma.id,
        {
            onUpdate: 'CASCADE',
            eager: true
        })
    @JoinColumn({
        name: 'id_idioma',
    })
    idioma!: Idioma;

    @ManyToMany((type) => Tema, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinTable({
        name: "asignar_tema",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_tema'
        }
    })
    tema!: Tema[];

    @ManyToMany((type) => Autor, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinTable({
        name: "escrito_por",
        joinColumn: {
            name: 'isbn'
        },
        inverseJoinColumn: {
            name: 'id_autor',
        }
    })
    @JoinColumn({
        name: 'id_autor',
    })
    autor!: Autor[];
    
    @OneToMany((type) => Opinion, opinion => opinion.libro, {
        eager: true
    })
    public opinion: Opinion[];

    @OneToMany((type) => Puntuacion, puntuacion => puntuacion.libro, {
        eager: true
    })
    puntuacion: Puntuacion[];
}
