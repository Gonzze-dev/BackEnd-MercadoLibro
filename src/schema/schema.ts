import {GraphQLSchema} from 'graphql'

import {rootQuery} from './Rooters/rootQuery'
import {rootMutation} from './Rooters/rootMutation'

export const schema = new GraphQLSchema(
{
    query: rootQuery,
    mutation: rootMutation,
})