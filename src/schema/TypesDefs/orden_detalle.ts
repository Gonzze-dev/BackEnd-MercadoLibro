import {GraphQLObjectType, 
        GraphQLID,
        GraphQLString,
        GraphQLFloat
        } from 'graphql';
import { TLibro } from './libro';

export const TOrden_detalle = new GraphQLObjectType({
name: 'orden_detalle',
fields: 
{
    id: {type: GraphQLID},
    precio: {type: GraphQLString},
    cantidad: {type: GraphQLFloat},
    id_orden: {type: GraphQLString},
    libro: {type: TLibro},
}
});