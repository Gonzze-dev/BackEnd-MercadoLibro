import {GraphQLObjectType,
        GraphQLID,
        GraphQLString} from 'graphql';

export const Tidioma = new GraphQLObjectType(
{
    name: 'idioma',
    fields: 
    {
        id: {type: GraphQLID},
        nombre: {type: GraphQLString}
    }
});