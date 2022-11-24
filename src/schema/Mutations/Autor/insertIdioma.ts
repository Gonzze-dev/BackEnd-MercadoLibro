import { GraphQLNonNull, GraphQLString} from "graphql";

async function fInsertAutor(nombre: String) {

	try {

		return 'SE INSERTO EL AUTOR CON EXITO';

	} catch (err) {
		return err;
	}
}

export const InsertAutor = {
	type: GraphQLString,
	args: {
		nombre: { type: new GraphQLNonNull(GraphQLString) }
	},
	async resolve(_: any, args: any) {
		const result = await fInsertAutor(args.nombre);

		return result;
	},
};
