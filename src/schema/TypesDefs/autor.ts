import {GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLNonNull} from 'graphql';

export const TAutor = new GraphQLObjectType(
{
    name: 'autor',
    fields: 
    {
        id: {type: new GraphQLNonNull(GraphQLID)},
        nombre: {type: new GraphQLNonNull(GraphQLString)}
    }
});