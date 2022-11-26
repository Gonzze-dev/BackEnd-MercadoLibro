import {GraphQLObjectType,
    GraphQLID,
    GraphQLString} from 'graphql';

export const TEditorial = new GraphQLObjectType(
{
    name: 'editorial',
    fields: 
    {
        id: {type: GraphQLID},
        nombre: {type: GraphQLString}
    }
});