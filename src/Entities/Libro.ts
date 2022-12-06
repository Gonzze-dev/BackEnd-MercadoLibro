import { Field, Float, ID, Int, ObjectType } from "type-graphql";

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

@ObjectType()
@Entity()
export class Libro extends BaseEntity
{
    
    @Field(type => ID, {nullable: true})
    @PrimaryColumn()
    isbn!: string;

    @Field({nullable: true})
    @Column('text')
    url_imagen!: string;

    @Field({nullable: true})
    @Column()
    titulo!: string;

    @Field({nullable: true})
    @Column()
    fecha_edicion!: string;

    @Field(type => Float, {nullable: true})
    @Column({
        type: 'decimal',
        precision: 10, 
        scale: 2,
    })
    precio!: number;

    @Field(type => Int, {nullable: true})
    @Column()
    stock!: number;

    @Field({nullable: true})
    @Column()
    descripcion!: string;

    @Field(type => String)
    @Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP'
    })
    fecha_ingreso!: Date;

    @Field(type => Float, {nullable: true})
    @Column({
        type: 'decimal',
        precision: 4, 
        scale: 2,
        nullable: true,
    })
    descuento: number;

    @Field(type => Editorial, {nullable: true})
    @ManyToOne(() => Editorial, (editorial) => editorial.id,
    {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({
        name: 'id_editorial'
    })
    editorial!: Editorial;

    @Field(type => Idioma, {nullable: true})
    @ManyToOne(() => Idioma, (idioma) => idioma.id,
        {
            onUpdate: 'CASCADE',
            eager: true
        })
    @JoinColumn({
        name: 'id_idioma',
    })
    idioma!: Idioma;

    @Field(type => [Tema], {nullable: true})
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

    @Field(type => [Autor], {nullable: true})
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
    
    @Field(type => [Opinion], {nullable: true})
    @OneToMany((type) => Opinion, opinion => opinion.libro, {
        eager: true
    })
    public opinion?: Opinion[];

    @Field(type => [Puntuacion], {nullable: true})
    @OneToMany((type) => Puntuacion, puntuacion => puntuacion.libro, {
        eager: true
    })
    puntuacion?: Puntuacion[];
}
