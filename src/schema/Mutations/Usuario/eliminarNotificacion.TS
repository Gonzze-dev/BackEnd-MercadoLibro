import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { eliminarNotificacion } from "../../../ORM_Queries/Usuario/eliminarNotificacion";

import { SendUsuario } from "../../../SendTypes/SendUsuario";

export async function EliminarNotificacion(idNotificacion: number, tokenUser: string) {
	const msj = new SendUsuario()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const mensaje = await eliminarNotificacion(idNotificacion, id);

		msj.message = mensaje
		msj.success = true;
		msj.accessToken = tokenUser;
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
