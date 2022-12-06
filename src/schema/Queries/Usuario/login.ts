import { sign, verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config";

import { getUsuarioById } from "../../../ORM_Queries/Usuario/getUsuarioById";
import { login } from "../../../ORM_Queries/Usuario/login";
import { SendUsuario } from "../../../SendTypes/SendUsuario";


async function GetUsuarioByCorreoYPassword(args: any): Promise<SendUsuario> 
{
    const msj = new SendUsuario()

    try {
        const usuario = await login(args.correo, args.contrasenia)

        const id_usuario: string = usuario[0].id.toString()

        msj.accessToken = sign(id_usuario, JWT_SECRET);
        msj.success = true;
        msj.usuario = usuario[0];
      
        return msj;
    } catch (err: any) {

        return msj;
    }
}

async function GetUsuarioByToken(tokenUser: string): Promise<SendUsuario>
{
    const msj = new SendUsuario()

	try {

		const id: number = parseInt(<string>verify(tokenUser, JWT_SECRET))
    
		const usuario = await getUsuarioById(id);

        msj.accessToken = tokenUser;
        msj.success = true;
        msj.usuario = usuario[0];

		return msj;
	} catch (err) {
		return msj;
	}
}

export async function selectLoginType(args:  any)
{
    if (args.correo != '' && args.contrasenia != '')
    {
        return await GetUsuarioByCorreoYPassword(args)
    }
    else if(args.tokenUser != '')
    {
        return await GetUsuarioByToken(args.tokenUser)
    }
    
    return new SendUsuario()
}

