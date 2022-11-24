import {GraphQLObjectType,
    GraphQLString,
    GraphQLBoolean} from 'graphql';

export const authentication = new GraphQLObjectType({
name: 'authentication',
fields: 
{
    mensaje: {type: GraphQLString},
    success: {type: GraphQLBoolean},
    accessToken: {type: GraphQLString}
}
});