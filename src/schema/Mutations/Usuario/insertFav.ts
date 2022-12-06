import { GraphQLNonNull, GraphQLString} from "graphql";
import { verify } from "jsonwebtoken";

import { JWT_SECRET } from "../../../config"
import { insertFav } from "../../../ORM_Queries/Usuario/insertFav";
import { jSendUser, TSendUser } from "../../TypesDefs/sendUser";

async function fInsertFav(isbn: string, tokenUser: string) {
	let msj = jSendUser()

	try {
		const id = parseInt(<string>verify(tokenUser, JWT_SECRET))
		const usuario = await insertFav(isbn, id);

		msj.message = "Libro añadido a favoritos"
		msj.success = true;
		msj.accessToken = tokenUser;
		msj.usuario = usuario[0];
		
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
