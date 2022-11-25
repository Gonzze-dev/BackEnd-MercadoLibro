import {GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLBoolean
    } from 'graphql';

export const TCupon = new GraphQLObjectType({
    name: 'cupon',
    fields: 
    {
        codigo_cupon: {type: GraphQLString},
        porc_descuento: {type: GraphQLFloat},
        utilizado: {type: GraphQLBoolean},
    }
});