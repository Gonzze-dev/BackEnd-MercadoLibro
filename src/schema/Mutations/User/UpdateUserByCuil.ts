import { GraphQLID, GraphQLNonNull, GraphQLString } from "graphql";


async function fUpdateUserByCuil(
	cuil: any,
	nombre: any,
	contrasenia: any,
	correo: any
) {
	let mensaje = "";

	try {
		

		return mensaje
	} catch (err) {
		return err;
	}
}

export const UpdateUserByCuil = {
	type: GraphQLString,
	args: {
		cuil: { type: new GraphQLNonNull(GraphQLID) },
		nombre: { type: new GraphQLNonNull(GraphQLString) },
		contrasenia: { type: new GraphQLNonNull(GraphQLString) },
		correo: { type: new GraphQLNonNull(GraphQLString) },
	},
	async resolve(_: any, args: any) {
		const result = await fUpdateUserByCuil(
			args.cuil,
			args.nombre,
			args.contrasenia,
			args.correo
		);
		return result;
	},
};
