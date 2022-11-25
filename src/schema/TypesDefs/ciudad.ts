import {GraphQLObjectType,
    GraphQLString
    } from 'graphql';

import { TProvincia } from './provincia';


export const TCiudad = new GraphQLObjectType({
    name: 'ciudad',
    fields: 
    {
        cp: {type: GraphQLString},
        nombre: {type: GraphQLString},
        provincia: {type: TProvincia}
    }
});