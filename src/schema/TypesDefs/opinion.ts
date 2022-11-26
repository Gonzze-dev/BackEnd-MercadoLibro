import {GraphQLObjectType, 
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt
    } from 'graphql';

export const TOpinion = new GraphQLObjectType({
    name: 'opinion',
    fields: 
    {
        usuario_libro: {type: GraphQLString},
        comentario: {type: GraphQLString},
        id_usuario: {type: GraphQLInt},
        isbn: {type: GraphQLString}
    }
});