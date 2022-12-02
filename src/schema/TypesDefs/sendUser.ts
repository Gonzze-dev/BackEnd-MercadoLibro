import { GraphQLBoolean, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { TSend } from "./send";
import { TUsuario } from "./usuario";

export const jSendUser = () =>
{
    return {
        message: "",
        success: false,
        status: 0,
        accessToken: '',
        usuario: new Array<any>
    }
}

export const TSendUser = new GraphQLObjectType({
    name: `TSendUser`,
    fields: 
    {
        message: {type: GraphQLString},
        success: {type: GraphQLBoolean},
        status: {type: GraphQLString},
        accessToken: {type: GraphQLString},
        usuario: {type: new GraphQLList(TUsuario)}
    }
});

