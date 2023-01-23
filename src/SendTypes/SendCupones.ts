import { Field, Int, ObjectType } from "type-graphql";
import { Cupon } from "../Entities/Cupon";
import { Send } from "./Send";

@ObjectType()
export class SendCupones extends Send
{
    @Field(type => Int, {nullable: true})
    maxPage: number

    @Field(type => Int, {nullable: true})
    page: number

    @Field(type => [Cupon], {nullable: true})
    cupones: Cupon[]
}