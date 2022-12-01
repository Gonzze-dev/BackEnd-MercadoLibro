import {GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean} from 'graphql';

/*La existencia de la clase es para ahorrar codigo, debido a que todas 
las respuestas tienen exactamente la misma extructura, 
cambiando unicamente el objeto que retornan sus metodod
*/

export const jSend = () =>
{
    return {
        message: "",
        success: false,
        status: 0,
        results: new Array
    }
}

export const TSend = (metodName: string, TypeDef: GraphQLObjectType) => new GraphQLObjectType({
    name: `send_${metodName}`,
    fields: 
    {
        message: {type: GraphQLString},
        success: {type: GraphQLBoolean},
        status: {type: GraphQLString},
        results: {type: TypeDef}
    }
});

