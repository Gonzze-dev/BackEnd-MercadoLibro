import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"

import { opinar } from "../../../ORM_Queries/Usuario/opinar";
import { SendLibro } from "../../../SendTypes/SendLibro";

export async function Opinar(comentario: string, isbn: string, tokenUser: string) {
	const msj = new SendLibro()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const libro = await opinar(comentario, isbn, id);

		msj.message = "LIBRO SE COMENTO CON EXITO!!!"
		msj.success = true;
		msj.status = 200;
		msj.libro.push(libro[0]);
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
