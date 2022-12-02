import {GraphQLBoolean, GraphQLObjectType, 
    GraphQLString
    } from 'graphql';

export const jMercadoPago = () =>
{
    return {
        message: "",
        success: false,
        status: 0,
        init_point: ''
    }
}

export const sendMercadoPago = new GraphQLObjectType({
    name: `sendMercadoPago`,
    fields: 
    {
        message: {type: GraphQLString},
        success: {type: GraphQLBoolean},
        status: {type: GraphQLString},
        init_point: {type: GraphQLString}
    }
});

