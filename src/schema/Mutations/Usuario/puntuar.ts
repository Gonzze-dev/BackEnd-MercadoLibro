import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"


import { puntuar } from "../../../ORM_Queries/Usuario/puntuar";
import { SendLibro } from "../../../SendTypes/SendLibro";

export async function Puntuar(puntuacion: number, isbn: string, tokenUser: string) {
	const msj = new SendLibro()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const libro = await puntuar(puntuacion, isbn, id);

		msj.message = "LIBRO SE PUNTUO CON EXITO!!!"
		msj.success = true;
		msj.status = 200;
		msj.libro.push(libro[0]);
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
