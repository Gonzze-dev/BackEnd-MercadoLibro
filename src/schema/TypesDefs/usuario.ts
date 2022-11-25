import {GraphQLObjectType, 
        GraphQLID,
        GraphQLString,
        GraphQLBoolean,
        GraphQLList
        } from 'graphql';

import { TLibro } from './libro';
import { TOrden } from './orden';

export const TUsuario = new GraphQLObjectType({
    name: 'usuario',
    fields: 
    {
        id: {type: GraphQLID},
        nombre: {type: GraphQLString},
        correo: {type: GraphQLString},
        contrasenia: {type: GraphQLString},
        admin: {type: GraphQLBoolean},
        telefono: {type: GraphQLString},
        libro: {type: new GraphQLList(TLibro)},
        orden: {type: new GraphQLList(TOrden)}
    }
});