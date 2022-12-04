import { GraphQLScalarType } from "graphql";

class Tema
{
    public nombre: string
    public url_imagen: string
}

export declare const temaScalar: GraphQLScalarType<Tema, Tema>