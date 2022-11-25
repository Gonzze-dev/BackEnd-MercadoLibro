import {GraphQLObjectType, 
    GraphQLID,
    GraphQLString
    } from 'graphql';

export const TPais = new GraphQLObjectType({
    name: 'pais',
    fields: 
    {
        id: {type: GraphQLID},
        nombre: {type: GraphQLString}
    }
});