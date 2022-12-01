import { GraphQLString, GraphQLNonNull } from "graphql";
import { sign, verify } from "jsonwebtoken";

import { secret } from "../../../config";
import { getUsuarioById } from "../../../ORM_Queries/Usuario/getUsuarioById";
import { login } from "../../../ORM_Queries/Usuario/login";
import { jSendUser, TSendUser } from "../../TypesDefs/sendUser";

async function fGetUsuarioByCorreoYPassword(args: any) {
    const msj = jSendUser()

    try {
        const usuario = await login(args.correo, args.contrasenia)

        const id_usuario: string = usuario[0].id.toString()

        msj.results.accessToken = sign(id_usuario, secret);
        msj.success = true;
        msj.results.usuario = usuario;
      
        return msj;
    } catch (err: any) {

        return msj;
    }
}

async function fGetUsuarioByToken(tokenUser: string) {
	let msj = jSendUser();

	try {

		const id: number = parseInt(<string>verify(tokenUser, secret))
    
		const usuario = await getUsuarioById(id);

		msj.message = "Usuario obtenido con exito";
		msj.success = true;
		msj.results.accessToken = tokenUser;
		msj.results.usuario = usuario;
		
		return msj;
	} catch (err) {
		return msj;
	}
}

async function selectFunction(args:  any)
{
    if (args.correo && args.contrasenia)
    {
        return fGetUsuarioByCorreoYPassword(args)
    }
    else if(args.tokenUser)
    {
        return fGetUsuarioByToken(args.tokenUser)
    }
    
    return jSendUser()
}


export const Login = {
    type: TSendUser,
    args: {
        correo: { type: GraphQLString },
        contrasenia: { type: GraphQLString },
        tokenUser: {type: GraphQLString }
    },
    async resolve(_: any, args: any) {
        const result = await selectFunction(args);
        return result;
    },
};