import {GraphQLObjectType, 
        GraphQLID,
        GraphQLString,
        GraphQLBoolean,
        GraphQLList
        } from 'graphql';

import { TCarrito } from './carrito';
import { TLibro } from './libro';
import { TOrden } from './orden';

export const TUsuario: GraphQLObjectType = new GraphQLObjectType({
    name: 'usuario',
    fields: 
    {
        id: {type: GraphQLID},
        nombre: {type: GraphQLString},
        correo: {type: GraphQLString},
        contrasenia: {type: GraphQLString},
        admin: {type: GraphQLBoolean},
        favorito: {type: new GraphQLList(TLibro)},
        orden: {type: new GraphQLList(TOrden)},
        carrito: {type: new GraphQLList(TCarrito)}
    }
});