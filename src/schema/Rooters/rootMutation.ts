import {GraphQLObjectType} from 'graphql';

//USUARIO
import { SignUp } from '../Mutations/Usuario/SignUp';
import { InsertFav } from '../Mutations/Usuario/insertFav';
import { RealizarCompra } from '../Mutations/Usuario/realizarCompra';

//LIBRO
import { InsertLibro } from '../Mutations/Libro/insertLibro';

//IDIOMA


//TEMA

//ATUOR



export const rootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    fields:
    {
        //USUARIO
        realizarCompra: RealizarCompra,
        signUp: SignUp,
        insertFav: InsertFav,

        //LIBRO
        isnertLibro: InsertLibro
    }
})