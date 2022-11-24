import { GraphQLID, GraphQLNonNull, GraphQLString} from "graphql";
import { authentication } from "../../TypesDefs/authentication";

async function createUser(
	cuil: any,
	nombre: any,
	contrasenia: any,
	correo: any) {

	let msj = {
		mensaje: "",
		success: false,
		accessToken: ""
	};

	try {


		// if (!result) {
		// 	msj.mensaje = `EL USUARIO CON CUIL ${cuil} o correo ${correo} YA ESTA REGISTRADO`;
		// } else {
		// 	msj.mensaje = `EL USUARIO CON CUIL ${cuil} REGISTRADO CON EXITO!`;
		// 	msj.success = true
		// }

		return msj;

	} catch (err) {
		return err;
	}
}

export const CreateUser = {
	type: authentication,
	args: {
		cuil: { type: new GraphQLNonNull(GraphQLID) },
		nombre: { type: new GraphQLNonNull(GraphQLString) },
		contrasenia: { type: new GraphQLNonNull(GraphQLString) },
		correo: { type: new GraphQLNonNull(GraphQLString) },
	},
	async resolve(_: any, args: any) {
		const result = await createUser(
			args.cuil,
			args.nombre,
			args.contrasenia,
			args.correo
		);

		return result;
	},
};
