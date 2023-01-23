import { Field, Int, ObjectType } from "type-graphql";
import { Orden } from "../Entities/Orden";
import { Send } from "./Send";
import { type } from "os";

@ObjectType()
export class SendOrden extends Send
{
    @Field(type => [Orden], {nullable: true})
    orden: Orden[];
}

@ObjectType()
export class SendOrdenByPage extends Send
{
    @Field(type => [Orden], {nullable: true})
    orden: Orden[];

    @Field(type => Int)
    maxPage: number;
}