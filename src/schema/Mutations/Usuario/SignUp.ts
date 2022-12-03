import { GraphQLNonNull, GraphQLString} from "graphql";
import { sign } from "jsonwebtoken";
import { jSendUser, TSendUser } from "../../TypesDefs/sendUser"
import { secret } from "../../../config"
import { signUp } from '../../../ORM_Queries/Usuario/signUp'
import { TUsuario } from "../../TypesDefs/usuario";

async function fSignUp(args: any) {
	let msj = jSendUser();

	try {

		const usuario = await signUp(args);
		const id_usuario: string = usuario[0].id.toString()

		msj.accessToken = sign(id_usuario, secret);
		msj.success = true;
		msj.usuario = usuario[0];
		
		return msj;
	} catch (err) {
		return msj;
	}
}

export const SignUp = {
	type: TSendUser,
	args: {
		nombre: { type: new GraphQLNonNull(GraphQLString) },
		contrasenia: { type: new GraphQLNonNull(GraphQLString) },
		correo: { type: new GraphQLNonNull(GraphQLString) }
	},
	async resolve(_: any, args: any) {
		const result = await fSignUp(args);

		return result;
	},
};
