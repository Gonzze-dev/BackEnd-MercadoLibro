import { Field, Int, ObjectType } from "type-graphql";
import { Cupon } from "../Entities/Cupon";

@ObjectType()
export class SendCupon
{
    @Field()
    message: string = "";

    @Field()
    success:boolean = false;

    @Field(type => Cupon, {nullable: true})
    cupon: Cupon
}