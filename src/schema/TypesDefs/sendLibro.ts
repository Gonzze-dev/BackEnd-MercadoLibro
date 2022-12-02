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
        libro: new Array<any>
    }
}

export const TSendLibro = new GraphQLObjectType({
    name: `sendLibro`,
    fields: 
    {
        message: {type: GraphQLString},
        success: {type: GraphQLBoolean},
        status: {type: GraphQLString},
        page: {type: GraphQLInt},
        totalPage: {type: GraphQLInt},
        libro: {type: new GraphQLList(TLibro)}
    }
});