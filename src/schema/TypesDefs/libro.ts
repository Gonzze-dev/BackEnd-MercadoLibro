import {GraphQLObjectType, 
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLFloat} from 'graphql';

export const TLibro = new GraphQLObjectType({
name: 'libro',
fields: 
{
    isbn: {type: GraphQLID},
    imagen: {type: GraphQLString},
    titulo: {type: GraphQLString},
    fecha_edicion: {type: GraphQLString},
    precio: {type: GraphQLFloat},
    stock: {type: GraphQLInt},
    descripcion: {type: GraphQLString},
    idioma: {type: GraphQLString},
    autor: {type: new GraphQLList(GraphQLString)},
    tema: {type: new GraphQLList(GraphQLString)},
}
});