import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ArgsGetVentas {
    @Field()
    fechaMenor: string = '';

    @Field()
    fechaMayor: string = '';
}

@ArgsType()
export class ArgsGetVentasByPage 
{
    @Field()
    fechaMenor: string = '';

    @Field()
    fechaMayor: string = '';

    @Field({nullable: true})
    limit: number

    @Field({nullable: true})
    offset: number
}