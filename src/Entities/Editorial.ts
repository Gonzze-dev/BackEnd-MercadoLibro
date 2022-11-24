import { Column, 
    Entity, 
    PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Editorial {
@PrimaryGeneratedColumn()
    id!: number;

    @Column({
        unique: true
    })
    nombre!: string;
}
