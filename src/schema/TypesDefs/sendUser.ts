import { GraphQLBoolean, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

import { TUsuario } from "./usuario";

export const jSendUser = () =>
{
    return {
        message: "",
        success: false,
        status: 0,
        accessToken: '',
        usuario: {},
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
        usuario: {type: TUsuario}
    }
});

