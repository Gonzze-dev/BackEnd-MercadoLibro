import { GraphQLNonNull, GraphQLString} from "graphql";

async function fInsertIdioma(nombre: String) {

	try {

		return 'SE INSERTO EL IDIOMA CON EXITO';

	} catch (err) {
		return err;
	}
}

export const InsertIdioma = {
	type: GraphQLString,
	args: {
		nombre: { type: new GraphQLNonNull(GraphQLString) }
	},
	async resolve(_: any, args: any) {
		const result = await fInsertIdioma(args.nombre);

		return result;
	},
};
