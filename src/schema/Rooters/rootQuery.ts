import {GraphQLObjectType} from 'graphql'

//USUARIO
import { Login } from '../Queries/Usuario/login';
import { GetUsuarioByToken } from '../Queries/Usuario/getUsuarioByToken';
//LIBRO
import { Getlibros } from '../Queries/Libro/getibros';

export const rootQuery= new GraphQLObjectType({
    name: 'rootQuery',
    fields:
    {
        getLibros: Getlibros,
        login: Login
    }
})