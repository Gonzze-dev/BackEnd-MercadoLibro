import {GraphQLObjectType, 
        GraphQLID,
        GraphQLString,
        GraphQLBoolean,
        GraphQLInt} from 'graphql';

export const TipoUsuario = new GraphQLObjectType({
    name: 'usuario',
    fields: 
    {
        cuil: {type: GraphQLID},
        nombre: {type: GraphQLString},
        contrasenia: {type: GraphQLString},
        correo: {type: GraphQLString},
        admin: {type: GraphQLBoolean},
        id_carrito: {type: GraphQLInt}
    }
});