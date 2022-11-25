import {GraphQLObjectType,
        GraphQLID,
        GraphQLString} from 'graphql';

export const TIdioma = new GraphQLObjectType(
{
    name: 'idioma',
    fields: 
    {
        id: {type: GraphQLID},
        nombre: {type: GraphQLString}
    }
});