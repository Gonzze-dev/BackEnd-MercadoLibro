import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config";

import { quitarProducto } from "../../../ORM_Queries/Usuario/quitarProducto";
import { SendUsuario } from "../../../SendTypes/SendUsuario";

export async function QuitarProducto(cantidad: number, isbn: string, tokenUser: string): Promise<SendUsuario>
{
    const msj = new SendUsuario()

	try {

		const id: number = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const usuario = await quitarProducto(cantidad, isbn, id);

        msj.message = `SE QUITARON ${cantidad} PRODUCTOS DEL CARRITO CON EXITO!!!`
        msj.accessToken = tokenUser;
        msj.success = true;
        msj.usuario = usuario[0];

		return msj;
	} catch (err) {
		return msj;
	}
}

