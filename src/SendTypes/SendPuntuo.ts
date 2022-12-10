import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SendPuntuo
{
    @Field()
    message: string = '';

    @Field()
    success: boolean = false;

    @Field()
    status: number;
    
    @Field()
    puntuo: boolean;
}