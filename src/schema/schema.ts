import {GraphQLSchema} from 'graphql'

import {rootQueryUsuario} from './Rooters/Queries/user'
import {rootMutation} from './Rooters/Mutations/user'

export const schema = new GraphQLSchema(
{
    query: rootQueryUsuario,
    mutation: rootMutation,
})