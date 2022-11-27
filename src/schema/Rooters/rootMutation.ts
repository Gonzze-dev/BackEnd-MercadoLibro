import {GraphQLObjectType} from 'graphql';

import {DeleteUserByMail} from '../Mutations/User/DeleteUser';
import {CreateUser} from '../Mutations/User/CreateUser';
import {UpdateUserByCuil} from '../Mutations/User/UpdateUserByCuil';
import {Login} from '../Mutations/User/login';
import {SignUp} from '../Mutations/User/SignUp';

//IDIOMA
import { InsertIdioma } from '../Mutations/Idioma/insertIdioma';
import { UpdateIdioma } from '../Mutations/Idioma/UpdateIdioma';


//TEMA
import { InsertTema } from '../Mutations/Tema/insertITema';
import { UpdateTema } from '../Mutations/Tema/UpdateTema';

//Autor
import { InsertAutor } from '../Mutations/Autor/insertIdioma';
import { UpdateAutor } from '../Mutations/Autor/UpdateAutor';

//Libro
import { InsertLibro } from '../Mutations/Libro/insertLibro';
import { UpdateLibro } from '../Mutations/Libro/updateUser';

export const rootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    fields:
    {
        // DeleteUserByMail: DeleteUserByMail,
        // CreateUser: CreateUser,
        // UpdateUserByCuil: UpdateUserByCuil,
        // Login: Login,
        SignUp: SignUp,

        // InsertIdioma: InsertIdioma,
        // UpdateIdioma: UpdateIdioma,

        // InsertTema: InsertTema,
        // UpdateTema: UpdateTema,

        // InsertAutor: InsertAutor,
        // UpdateAutor: UpdateAutor,

        // InsertLibro: InsertLibro,
        // UpdateLibro: UpdateLibro
    }
})