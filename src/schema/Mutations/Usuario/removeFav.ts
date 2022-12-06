import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { removeFav } from "../../../ORM_Queries/Usuario/removeFav";

import { SendUsuario } from "../../../SendTypes/SendUsuario";

export async function RemoveFav(isbn: string, tokenUser: string) {
	const msj = new SendUsuario()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))

		const usuario = await removeFav(isbn, id);

		msj.message = "Libro removido de favoritos"
		msj.success = true;
		msj.accessToken = tokenUser;
		msj.usuario = usuario[0];
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}
