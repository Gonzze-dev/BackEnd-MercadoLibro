import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { eliminarNotificacion } from "../../../ORM_Queries/Usuario/eliminarNotificacion";

import { SendUsuario } from "../../../SendTypes/SendUsuario";

export async function EliminarNotificacion(idNotificacion: number) {
	const msj = new SendUsuario()

	try {

		const mensaje = await eliminarNotificacion(idNotificacion);

		msj.message = mensaje
		msj.success = true;

		return msj;
	} catch (err) {
		
		return msj;
	}
}
