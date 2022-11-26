import {GraphQLObjectType} from 'graphql'

import { Login } from '../Queries/Usuario/login';
import { GetUserByMail } from '../Queries/Usuario/GetUserByMail';

//IDIOMA
import { GetIdiomaById } from '../Queries/Idioma/getIdiomaById';

//TEMA
import { GetTemaById } from '../Queries/Tema/getTemaById';

//AUTOR
import { GetAutorById } from '../Queries/Autor/getIdiomaById';
import { GetLibroByIsbn } from '../Queries/Libro/getLibroByIsbn';
import { GetAllLibros } from '../Queries/Libro/getAllLibros';


export const rootQuery= new GraphQLObjectType({
    name: 'rootQuery',
    fields:
    {
        // GetUserByMail: GetUserByMail,
        // GetIdiomaById: GetIdiomaById,
        // GetTemaById: GetTemaById,
        // GetAutorById: GetAutorById,
        // GetLibroByIsbn: GetLibroByIsbn,
        GetAllLibros: GetAllLibros,
        Login: Login
    }
})