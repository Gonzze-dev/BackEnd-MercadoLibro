import { BaseEntity,
        Column, 
        Entity, 
        JoinColumn, 
        ManyToOne, 
        OneToOne, 
        PrimaryGeneratedColumn} from "typeorm";

import { Ciudad } from "./Ciudad";
    
import { Usuario } from "./Usuario";

@Entity()
export class Direccion extends BaseEntity
{
    
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    direccion!: string;

    @Column({
        nullable: true
    })
    infoAdicional: string;

    @Column({type: 'bigint'})
    dni!: number;

    @Column({
        nullable: true
    })
    telefono: string;

    @OneToOne((type) => Usuario, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    @ManyToOne((type) => Ciudad, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({name: 'cp'})
    cp!: Ciudad;
}
