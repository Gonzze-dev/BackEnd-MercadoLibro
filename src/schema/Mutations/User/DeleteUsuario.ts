import {GraphQLList, GraphQLID, GraphQLNonNull} from 'graphql';
import { TipoUsuario } from '../../TypesDefs/user';
const { Pool } = require('pg');

const conection = new Pool(
    {
        host: "localhost",
        user: "postgres",
        password: "1234",
        database: "test"
    });

async function deleteUsuario(cuil: any)
{
    

    try{
        

        return `USUARIO CON CUIL ${cuil} ELIMINADO`
    }
    catch(err)
    {
        return err
    }

}

export const DeleteUsuario = 
{
    type: TipoUsuario,
    args:
    {
        cuil: { type: new GraphQLNonNull(GraphQLID) }
    },
    async resolve(_: any, args: any)
    {
        const result = await deleteUsuario(args.cuil);
        return result;
    } 
}

