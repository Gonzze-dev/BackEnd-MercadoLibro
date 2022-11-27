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
    calle!: string;

    @Column()
    numero!: number;

    @Column({
        nullable: true
    })
    piso_departamento: string;

    @Column({type: 'bigint'})
    dni!: number;

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
