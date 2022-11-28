import { GraphQLNonNull, GraphQLString} from "graphql";
import { sign } from "jsonwebtoken";

import { secret } from "../../../config"
import { insertFav } from "../../../ORM_Queries/Usuario/insertFav";
import { authentication } from "../../TypesDefs/authentication";

async function fInsertFav(isbn: string, tokenUser: string) {
	let msj = {
		mensaje: "",
		success: false,
		accessToken: "",
		usuario: {}
	};

	try {

		const usuario = await insertFav(isbn, tokenUser);
		const id_usuario: string = usuario[0].id.toString()

		msj.mensaje = "Libro añadido a favoritos"
		msj.accessToken = sign(id_usuario, secret);
		msj.success = true;
		msj.usuario = usuario[0];
		
		return msj;
	} catch (err) {
		return msj;
	}
}

export const InsertFav = {
	type: authentication,
	args: {
		isbn: { type: new GraphQLNonNull(GraphQLString) },
		tokenUser: { type: new GraphQLNonNull(GraphQLString) },
	},
	async resolve(_: any, args: any) {
		const result = await fInsertFav(args.isbn, args.tokenUser);

		return result;
	},
};
