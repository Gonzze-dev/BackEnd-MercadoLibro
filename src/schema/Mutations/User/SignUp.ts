import { GraphQLNonNull, GraphQLString} from "graphql";
import { sign } from "jsonwebtoken";
import { authentication } from "../../TypesDefs/authentication"
import { secret } from "../../../config"
import { signUp } from '../../../ORM_Queries/Usuario/signUp'

async function fSignUp(args: any) {
	let msj = {
		mensaje: "",
		success: false,
		accessToken: "",
		usuario: {}
	};

	try {

		const usuario = await signUp(args);
		const id_usuario: string = usuario[0].id.toString()

		msj.accessToken = sign(id_usuario, secret);
		msj.success = false;
		msj.usuario = usuario[0];
		
		return msj;
	} catch (err) {
		return err;
	}
}

export const SignUp = {
	type: authentication,
	args: {
		nombre: { type: new GraphQLNonNull(GraphQLString) },
		contrasenia: { type: new GraphQLNonNull(GraphQLString) },
		correo: { type: new GraphQLNonNull(GraphQLString) },
		telefono: { type: GraphQLString }
	},
	async resolve(_: any, args: any) {
		const result = await fSignUp(args);

		return result;
	},
};
