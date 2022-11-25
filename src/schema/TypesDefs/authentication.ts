import {GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean} from 'graphql';
import { TUsuario } from './usuario';

export const authentication = new GraphQLObjectType({
    name: 'authentication',
    fields: 
    {
        mensaje: {type: GraphQLString},
        success: {type: GraphQLBoolean},
        accessToken: {type: GraphQLString},
        usuario: {type: TUsuario}
    }
});