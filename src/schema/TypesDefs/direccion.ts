import {GraphQLObjectType,
        GraphQLID, 
        GraphQLInt,
        GraphQLString
        } from 'graphql';
import { TCiudad } from './ciudad';

export const TDireccion = new GraphQLObjectType({
    name: 'direccion',
    fields: 
    {
        id: {type: GraphQLID},
        calle: {type: GraphQLString},
        numero: {type: GraphQLInt},
        piso_departamento: {type: GraphQLString},
        dni: {type: GraphQLInt},
        id_usuario: {type: GraphQLID},
        ciudad: {type: TCiudad}
    }
});