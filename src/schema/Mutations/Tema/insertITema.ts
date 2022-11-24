import { GraphQLNonNull, GraphQLString} from "graphql";

async function fInsertTema(nombre: String) {

	try {

		return 'SE INSERTO EL TEMA CON EXITO';

	} catch (err) {
		return err;
	}
}

export const InsertTema = {
	type: GraphQLString,
	args: {
		nombre: { type: new GraphQLNonNull(GraphQLString) }
	},
	async resolve(_: any, args: any) {
		const result = await fInsertTema(args.nombre);

		return result;
	},
};
