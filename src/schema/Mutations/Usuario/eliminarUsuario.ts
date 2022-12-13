import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { eliminarUsuario } from "../../../ORM_Queries/Usuario/eliminarUsuario";
import { insertFav } from "../../../ORM_Queries/Usuario/insertFav";
import { Send } from "../../../SendTypes/Send";

export async function EliminarUsuario(correo: string) {
	const msj = new Send()

	try {
		await eliminarUsuario(correo);

		msj.message = `USUARIO ELIMINADO!`
		msj.success = true;
		msj.status = 200;
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
