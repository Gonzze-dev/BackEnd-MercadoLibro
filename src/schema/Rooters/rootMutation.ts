import {GraphQLObjectType} from 'graphql';

//USUARIO
import { SignUp } from '../Mutations/Usuario/SignUp';
import { InsertFav } from '../Mutations/Usuario/insertFav';
import { RealizarCompra } from '../Mutations/Usuario/realizarCompra';

//IDIOMA


//TEMA

//ATUOR

//LIBRO


export const rootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    fields:
    {
        realizarCompra: RealizarCompra,
        signUp: SignUp,
        insertFav: InsertFav
    }
})