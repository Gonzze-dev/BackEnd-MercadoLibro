import {GraphQLObjectType, 
    GraphQLString
    } from 'graphql';
import { TSend } from './send';

export const jMercadoPago = () =>
{
    return {
        message: "",
        success: false,
        status: 0,
        results: 
        {
            init_point: ''
        }
    }
}

const ObjectMercadoPago = new GraphQLObjectType({
    name: 'ObjectMercadoPago',
    fields: 
    {
        init_point: {type: GraphQLString}
    }
});

export const sendMercadoPago = TSend('sendMercadoPago', ObjectMercadoPago);

