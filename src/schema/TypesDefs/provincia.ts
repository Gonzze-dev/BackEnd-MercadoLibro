import {GraphQLObjectType, 
    GraphQLID,
    GraphQLString
    } from 'graphql';
import { TPais } from './pais';


export const TProvincia = new GraphQLObjectType({
    name: 'provincia',
    fields: 
    {
        id: {type: GraphQLID},
        nombre: {type: GraphQLString},
        pais: {type: TPais}
    }
});