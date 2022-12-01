import { GraphQLNonNull, GraphQLString} from "graphql";
import { verify } from "jsonwebtoken";

import { secret } from "../../../config"
import { insertFav } from "../../../ORM_Queries/Usuario/insertFav";
import { jSendUser, TSendUser } from "../../TypesDefs/sendUser";

async function fInsertFav(isbn: string, tokenUser: string) {
	let msj = jSendUser()

	try {
		const id = parseInt(<string>verify(tokenUser, secret))
		const usuario = await insertFav(isbn, id);

		msj.message = "Libro añadido a favoritos"
		msj.success = true;
		msj.results.accessToken = tokenUser;
		msj.results.usuario = usuario;
		
		return msj;
	} catch (err) {
		
		return msj;
	}
}

export const InsertFav = {
	type: TSendUser,
	args: {
		isbn: { type: new GraphQLNonNull(GraphQLString) },
		tokenUser: { type: new GraphQLNonNull(GraphQLString) },
	},
	async resolve(_: any, args: any) {
		const result = await fInsertFav(args.isbn, args.tokenUser);

		return result;
	},
};
