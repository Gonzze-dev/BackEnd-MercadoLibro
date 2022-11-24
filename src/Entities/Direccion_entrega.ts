import { Column,
        Entity,
        JoinColumn,
        ManyToOne,
        PrimaryGeneratedColumn} from "typeorm";

import { Ciudad } from "./Ciudad";
    
import { Usuario } from "./Usuario";

@Entity()
export class Direccion_entrega 
{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    calle!: string;

    @Column()
    numero!: number;

    @Column()
    piso_departamento!: string;

    @Column({type: 'bigint'})
    dni!: number;

    @ManyToOne((type) => Usuario, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'id_usuario'})
    usuario!: Usuario;

    @ManyToOne((type) => Ciudad, {
        onUpdate: 'CASCADE'
    })
    @JoinColumn({name: 'cp'})
    cp!: Ciudad;
}
