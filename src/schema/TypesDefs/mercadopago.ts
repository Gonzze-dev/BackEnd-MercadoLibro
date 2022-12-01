import {GraphQLObjectType, 
    GraphQLString
    } from 'graphql';

export const jMercadoPago = () =>
{
    return {
        init_point: ''
    }
}

export const TMercado_pago = new GraphQLObjectType({
    name: 'mercado_pago',
    fields: 
    {
        init_point: {type: GraphQLString}
    }
});