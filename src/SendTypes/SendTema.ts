import { Field, Int, ObjectType } from "type-graphql";
import { Tema } from "../Entities/Tema";

@ObjectType()
export class SendTema
{
    @Field()
    message: string = "";

    @Field()
    success:boolean = false;

    @Field(type => [Tema], {nullable: true})
    temas?: Tema[]
}