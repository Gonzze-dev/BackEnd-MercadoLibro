import { Column, 
    Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tema {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true
    })
    nombre!: string;
}
