import {Column, 
        Entity, 
        PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Pais
{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;
}