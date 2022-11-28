import {GraphQLObjectType} from 'graphql';

//USUARIO
import {SignUp} from '../Mutations/User/SignUp';
import { InsertFav } from '../Mutations/User/insertFav';

//IDIOMA


//TEMA

//ATUOR

//LIBRO


export const rootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    fields:
    {
        SignUp: SignUp,
        insertFav: InsertFav
    }
})