import { GraphQLInt, GraphQLList, GraphQLObjectType } from "graphql";
import { TLibro } from "./libro";
import { TSend } from "./send";


export const jSendLibro = () =>
{
    return {
        message: "",
        success: false,
        status: 0,
        results: {
            libro: new Array
        }
    }
}

const ObjectLibro = new GraphQLObjectType({
    name: `ObjectLibro`,
    fields: 
    {
        page: {type: GraphQLInt},
        totalPage: {type: GraphQLInt},
        libro: {type: new GraphQLList(TLibro)}
    }
})

export const TSendLibro = TSend('sendLibro', ObjectLibro)