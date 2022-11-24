import {GraphQLObjectType} from 'graphql'

import { GetUserByMail } from '../../Queries/User/GetUserByMail';

//IDIOMA
import { GetIdiomaById } from '../../Queries/Idioma/getIdiomaById';

//TEMA
import { GetTemaById } from '../../Queries/Tema/getTemaById';

//AUTOR
import { GetAutorById } from '../../Queries/Autor/getIdiomaById';
import { GetLibroByIsbn } from '../../Queries/Libro/getLibroByIsbn';

export const rootQueryUsuario = new GraphQLObjectType({
    name: 'rootQuery',
    fields:
    {
        GetUserByMail: GetUserByMail,
        GetIdiomaById: GetIdiomaById,
        GetTemaById: GetTemaById,
        GetAutorById: GetAutorById,
        GetLibroByIsbn: GetLibroByIsbn
    }
})