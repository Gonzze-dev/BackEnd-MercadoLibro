import { Field, Int, ObjectType } from "type-graphql";
import { Orden } from "../Entities/Orden";

@ObjectType()
export class SendOrden
{
    @Field()
    message: string = "";

    @Field()
    success:boolean = false;

    @Field(type => Int)
    status: number = 0;

    @Field(type => [Orden], {nullable: true})
    orden: Orden[];
}