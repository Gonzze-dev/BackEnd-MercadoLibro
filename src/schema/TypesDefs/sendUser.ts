import { GraphQLBoolean, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { TSend } from "./send";
import { TUsuario } from "./usuario";

export const jSendUser = () =>
{
    return {
        message: "",
        success: false,
        status: 0,
        results: {
            accessToken: '',
            usuario: new Array<any>
        }
    }
}

const ObjectUsuario = new GraphQLObjectType({
    name: `ObjectUsuario`,
    fields: 
    {
        accessToken: {type: GraphQLString},
        usuario: {type: new GraphQLList(TUsuario)}
    }
})

export const TSendUser = TSend('sendUsuario', ObjectUsuario);

