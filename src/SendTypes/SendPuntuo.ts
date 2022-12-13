import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SendPuntuo
{
    @Field()
    message: string = '';

    @Field()
    success: boolean = false;

    @Field()
    status: number = 0;
    
    @Field()
    puntuo: boolean = false;

    @Field()
    compro: boolean = false;
}