import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ArgsLogin 
{
    @Field()
    correo: string = '';

    @Field()
    contrasenia: string = '';

    @Field()
    tokenUser: string = '';
}

@ArgsType()
export class ArgsSingUp 
{
    @Field()
    nombre: string;

    @Field()
    correo: string;

    @Field()
    contrasenia: string;
}

@ArgsType()
export class ArgsInsertFav 
{
    @Field()
    isbn: string = '';

    @Field()
    tokenUser: string = '';
}
