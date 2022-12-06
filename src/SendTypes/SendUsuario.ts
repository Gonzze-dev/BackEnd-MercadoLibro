import { Field, Int, ObjectType } from "type-graphql";
import { Usuario } from "../Entities/Usuario";

@ObjectType()
export class SendUsuario
{
    @Field()
    message: string = "";

    @Field()
    success:boolean = false;

    @Field()
    accessToken: string = ''

    @Field(type => Usuario, {nullable: true})
    usuario?: Usuario
}