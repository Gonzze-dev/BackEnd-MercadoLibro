import {GraphQLObjectType, 
    GraphQLString,
    } from 'graphql';
import { TLibro } from './libro';
import { TUsuario } from './usuario';

export const TOpinion = new GraphQLObjectType({
    name: 'opinion',
    fields: () => 
    ({
        usuario_libro: {type: GraphQLString},
        comentario: {type: GraphQLString},
        usuario: {type: TUsuario},
        libro: {type: TLibro}
    })
});