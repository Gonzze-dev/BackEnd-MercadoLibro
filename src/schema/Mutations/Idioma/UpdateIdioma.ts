import { GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";

async function fUpdateIdioma(id: number, nombre: String) {

	try {


		return 'SE MODIFICO EL IDIOMA CON EXITO';

	} catch (err) {
		return err;
	}
}

export const UpdateIdioma = {
	type: GraphQLString,
	args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
		nombre: { type: new GraphQLNonNull(GraphQLString) }
	},
	async resolve(_: any, args: any) {
		const result = fUpdateIdioma(args.id, args.nombre);

		return result;
	},
};
