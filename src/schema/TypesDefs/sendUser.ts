import { GraphQLBoolean, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";

export const jSendUser = () =>
{
    return {
        message: "",
        success: false,
        accessToken: "",
        status: 0,
        object: new Array<any>
    }
}

export const TSendUser = (metodName: string, TypeDef: GraphQLObjectType) => new GraphQLObjectType({
    name: `send_${metodName}`,
    fields: 
    {
        message: {type: GraphQLString},
        success: {type: GraphQLBoolean},
        status: {type: GraphQLString},
        accessToken: {type: GraphQLString},
        object: {type: new GraphQLList(TypeDef)}
    }
});

