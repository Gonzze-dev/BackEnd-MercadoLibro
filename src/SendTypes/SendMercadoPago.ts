import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SendMercadoPago
{
    @Field()
    message: string = '';

    @Field()
    success: boolean = false;

    @Field()
    init_point: string = '';
}