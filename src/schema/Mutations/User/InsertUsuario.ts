
import {GraphQLID, GraphQLNonNull, GraphQLString} from 'graphql';
import { TipoUsuario } from '../../TypesDefs/user';
const { Pool } = require('pg');

const conection = new Pool(
    {
        host: "localhost",
        user: "postgres",
        password: "1234",
        database: "test"
    });

async function insertUsuario(cuil: any, nombre: any, contrasenia: any, correo: any)
{
    

    try{

        return `USUARIO CON CUIL ${cuil} CREADO`
    }
    catch(err)
    {
        return err
    }

}

export const InsertUsuario = 
{
    type: TipoUsuario,
    args:
    {
        cuil: { type: new GraphQLNonNull(GraphQLID) },
        nombre: { type: new GraphQLNonNull(GraphQLString) },
        contrasenia: { type: new GraphQLNonNull(GraphQLString) },
        correo: { type: new GraphQLNonNull(GraphQLString) }
    },
    async resolve(_: any, args: any)
    {
        const result = await insertUsuario(args.cuil, 
                                            args.nombre, 
                                            args.contrasenia, 
                                            args.correo);
        return result;
    } 
}

