import {GraphQLObjectType, 
    GraphQLID,
    GraphQLString
    } from 'graphql';

export const Ttema = new GraphQLObjectType({
    name: 'tema',
    fields: 
    {
        id: {type: GraphQLID},
        nombre: {type: GraphQLString},
        url_imagen: {type: GraphQLString}
    }
});