import { Column, 
        Entity, 
        PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Idioma {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true
    })
    nombre!: string;
}
