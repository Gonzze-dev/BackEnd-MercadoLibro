import {GraphQLObjectType,
    GraphQLID,
    GraphQLString} from 'graphql';

export const TAutor = new GraphQLObjectType(
{
    name: 'Autor',
    fields: 
    {
        id: {type: GraphQLID},
        nombre: {type: GraphQLString}
    }
});