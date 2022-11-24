import { GraphQLNonNull, GraphQLString} from "graphql";
import { sign} from "jsonwebtoken";
import { authentication } from "../../TypesDefs/authentication";
import { secret } from "../../../config";

async function login(
	correo: any,
	contrasenia: any
) {
	let userJson = {
		cuil: 0,
		admin : null
	};

	let msj = {
		mensaje: "",
		success: false,
		accessToken: ""
	};

	
	try {

		return msj;

	} catch (err) {
		return err;
	}
}

export const Login = {
	type: authentication,
	args: {
		contrasenia: { type: new GraphQLNonNull(GraphQLString) },
		correo: { type: new GraphQLNonNull(GraphQLString) }
	},
	async resolve(_: any, args: any) {
		const result = await login
		(
			args.correo,
			args.contrasenia
		);

		return result;
	},
};