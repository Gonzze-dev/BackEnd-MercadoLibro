import {GraphQLObjectType,
        GraphQLID, 
        GraphQLInt,
        GraphQLString,
        } from 'graphql';
import { TCiudad } from './ciudad';
import { TUsuario } from './usuario';

export const TDireccion = new GraphQLObjectType({
    name: 'direccion',
    fields: 
    {
        id: {type: GraphQLID},
        direccion: {type: GraphQLString},
        infoAdicional: {type: GraphQLString},
        dni: {type: GraphQLInt},
        telefono: {type: GraphQLString},
        usuario: {type: GraphQLID},
        ciudad: {type: TCiudad}
    }
});

