import {GraphQLSchema} from 'graphql'

import {rootQuery} from './Rooters/Queries/rootQuery'
import {rootMutation} from './Rooters/Mutations/rootMutation'

export const schema = new GraphQLSchema(
{
    query: rootQuery,
    mutation: rootMutation,
})