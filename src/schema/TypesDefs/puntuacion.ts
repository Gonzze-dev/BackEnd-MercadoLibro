import {GraphQLObjectType, 
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLInt
    } from 'graphql';
import { TLibro } from './libro';
import { TUsuario } from './usuario';

export const TPuntuacion = new GraphQLObjectType({
    name: 'puntuacion',
    fields: () => 
    ({
        usuario_libro: {type: GraphQLString},
        puntuacion: {type: GraphQLFloat},
        usuario: {type: TUsuario},
        libro: {type: TLibro}
    })
});