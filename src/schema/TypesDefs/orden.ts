import {GraphQLObjectType, 
        GraphQLID,
        GraphQLString,
        GraphQLFloat,
        GraphQLList} from 'graphql';
import { TCupon } from './cupon';
import { TDireccion } from './Direccion';
import { TOrden_detalle } from './orden_detalle';

export const TOrden = new GraphQLObjectType({
    name: 'orden',
    fields: 
    {
        id: {type: GraphQLID},
        fecha: {type: GraphQLString},
        total: {type: GraphQLFloat},
        cupon: {type: TCupon},
        id_usuario: {type: GraphQLString},
        direccion_entrega: {type: TDireccion},
        orden_detalle: {type: new GraphQLList(TOrden_detalle)}
    }
});
