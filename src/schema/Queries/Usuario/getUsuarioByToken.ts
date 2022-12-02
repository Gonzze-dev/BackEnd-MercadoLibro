import { GraphQLNonNull, GraphQLString} from "graphql";
import { verify } from "jsonwebtoken";


import { secret } from "../../../config"
import { getUsuarioById } from "../../../ORM_Queries/Usuario/getUsuarioById";
import { jSendUser, TSendUser } from "../../TypesDefs/sendUser";

async function fGetUsuarioByToken(tokenUser: string) {
	let msj = jSendUser();

	try {

		const id: number = parseInt(<string>verify(tokenUser, secret))
    
		const usuario = await getUsuarioById(id);

		msj.message = "Usuario obtenido con exito";
		msj.success = true;
		msj.accessToken = tokenUser;
		msj.usuario = usuario;
		
		return msj;
	} catch (err) {
		return msj;
	}
}

export const GetUsuarioByToken = {
	type: TSendUser,
	args: {
		tokenUser: { type: new GraphQLNonNull(GraphQLString) },
	},
	async resolve(_: any, args: any) {
		const result = await fGetUsuarioByToken(args.tokenUser);

		return result;
	},
};