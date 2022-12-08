import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config";
import { agregarProducto } from "../../../ORM_Queries/Usuario/agregarProductos";

import { SendUsuario } from "../../../SendTypes/SendUsuario";

export async function AgregarProducto(cantidad: number, isbn: string, tokenUser: string): Promise<SendUsuario>
{
    const msj = new SendUsuario()

	try {

		const id: number = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const usuario = await agregarProducto(cantidad, isbn, id);

        msj.message = 'SE AÑADIO AL CARRITO CON EXITO!!!'
        msj.accessToken = tokenUser;
        msj.success = true;
        msj.usuario = usuario[0];

		return msj;
	} catch (err) {
		return msj;
	}
}

