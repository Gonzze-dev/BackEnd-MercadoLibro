import {BaseEntity,
        Column, 
        Entity, 
        PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Pais extends BaseEntity
{

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    nombre!: string;
}