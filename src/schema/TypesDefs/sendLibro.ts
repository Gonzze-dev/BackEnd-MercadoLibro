import { GraphQLBoolean, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { TLibro } from "./libro";

export const jSendLibro = () =>
{
    return {
        message: "",
        success: false,
        status: 0,
        page: 0,
        totalPage: 0,
        results: {
            libro: new Array
        }
    }
}

const ObjectLibro = new GraphQLObjectType({
    name: `ObjectLibro`,
    fields: 
    {
        libro: {type: new GraphQLList(TLibro)}
    }
})

const TSend = (name: string, TypeDef: GraphQLObjectType) => new GraphQLObjectType({
    name: `send_${name}`,
    fields: 
    {
        message: {type: GraphQLString},
        success: {type: GraphQLBoolean},
        status: {type: GraphQLString},
        page: {type: GraphQLInt},
        totalPage: {type: GraphQLInt},
        results: {type: TypeDef}
    }
});

export const TSendLibro = TSend('sendLibro', ObjectLibro)