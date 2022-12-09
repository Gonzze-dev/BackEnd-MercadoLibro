import { ArgsType, Field, Int } from "type-graphql";

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


@ArgsType()
export class ArgsAgregarProducto
{
    @Field(type => Int)
    cantidad: number;

    @Field()
    isbn: string;

    @Field()
    tokenUser: string;
}


@ArgsType()
export class ArgsAgregarDireccion
{
    
    @Field()
    tokenUser!: string;

    @Field()
    nombre!: string;

    @Field()
    direccion!: string;

    @Field()
    infoAdicional: string;

    @Field(type => Int)
    dni!: number;

    @Field({nullable: true})
    telefono: string;

    @Field(type => Int)
    ciudad!: number;
}

@ArgsType()
export class ArgsAgregarCupon
{
    @Field()
    codigo_cupon: string;

    @Field()
    tokenUser: string;
}

