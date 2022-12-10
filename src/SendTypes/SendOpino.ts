import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SendOpino
{
    @Field()
    message: string = '';

    @Field()
    success: boolean = false;

    @Field()
    status: number;

    @Field()
    opino: boolean;
}