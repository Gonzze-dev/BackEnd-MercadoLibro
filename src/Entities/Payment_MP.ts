
import {BaseEntity,
        Entity, 
        PrimaryColumn} from 'typeorm'


@Entity()
export class Payment_MP extends BaseEntity
{

    @PrimaryColumn({type: 'varchar'})
    id!: string;

}