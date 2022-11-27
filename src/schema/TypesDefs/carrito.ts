import {GraphQLObjectType, 
    GraphQLID,
    GraphQLString,
    GraphQLInt
    } from 'graphql';

import { TLibro } from './libro';

export const TCarrito = new GraphQLObjectType({
name: 'carrito',
    fields: 
    {
        nro_linea: {type: GraphQLID},
        cantidad: {type: GraphQLInt},
        libro: {type: TLibro},
    }
});