import { GraphQLID, GraphQLNonNull, GraphQLString} from "graphql";
import { sign } from "jsonwebtoken";
import { authentication } from "../../TypesDefs/authentication"
import { secret } from "../../../config"

async function singUp(
	cuil: any,
	nombre: any,
	contrasenia: any,
	correo: any
) {
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

export const SingUp = {
	type: authentication,
	args: {
		cuil: { type: new GraphQLNonNull(GraphQLID) },
		nombre: { type: new GraphQLNonNull(GraphQLString) },
		contrasenia: { type: new GraphQLNonNull(GraphQLString) },
		correo: { type: new GraphQLNonNull(GraphQLString) },
	},
	async resolve(_: any, args: any) {
		const result = await singUp(
			args.cuil,
			args.nombre,
			args.contrasenia,
			args.correo
		);

		return result;
	},
};
