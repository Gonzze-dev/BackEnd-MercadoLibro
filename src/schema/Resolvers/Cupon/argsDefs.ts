import { ArgsType, Field, Float, Int } from "type-graphql";


@ArgsType()
export class ArgsGetCupones
{
    @Field(() => Int, {nullable: true})
    limit: number;

    @Field(() => Int, {nullable: true})
    offset: number;
}

@ArgsType()
export class ArgsInsertCupon
{
    @Field()
    codigo_cupon: string;
    
    @Field(type => Float)
    descuento: number;
}
