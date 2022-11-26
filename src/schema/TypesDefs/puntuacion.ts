import {GraphQLObjectType, 
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt
    } from 'graphql';

export const TPuntuacion = new GraphQLObjectType({
    name: 'puntuacion',
    fields: 
    {
        usuario_libro: {type: GraphQLString},
        puntuacion: {type: GraphQLFloat},
        id_usuario: {type: GraphQLInt},
        isbn: {type: GraphQLString}

    }
});