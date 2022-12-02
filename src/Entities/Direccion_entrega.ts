import { BaseEntity, 
        Column,
        Entity,
        JoinColumn,
        ManyToOne,
        PrimaryGeneratedColumn} from "typeorm";

import { Ciudad } from "./Ciudad";
    
import { Usuario } from "./Usuario";

@Entity()
export class Direccion_entrega extends BaseEntity
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

    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    @ManyToOne((type) => Ciudad, {
        onUpdate: 'CASCADE',
        eager: true
    })
    @JoinColumn({name: 'cp'})
    ciudad!: Ciudad;
}
