import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config";
import { eliminarProducto } from "../../../ORM_Queries/Usuario/eliminarProducto";

import { SendUsuario } from "../../../SendTypes/SendUsuario";

export async function EliminarProducto(isbn: string, tokenUser: string): Promise<SendUsuario>
{
    const msj = new SendUsuario()

	try {

		const id: number = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const usuario = await eliminarProducto(isbn, id);

        msj.message = `EL PRODUCTO SE ELIMINO CON EXITO!!!`
        msj.accessToken = tokenUser;
        msj.success = true;
        msj.usuario = usuario[0];

		return msj;
	} catch (err) {
        
		return msj;
	}
}

