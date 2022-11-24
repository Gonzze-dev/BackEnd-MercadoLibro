import { GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";

async function fUpdateTema(id: number, nombre: String) {

	try {


		return 'SE MODIFICO EL TEMA CON EXITO';

	} catch (err) {
		return err;
	}
}

export const UpdateTema = {
	type: GraphQLString,
	args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
		nombre: { type: new GraphQLNonNull(GraphQLString) }
	},
	async resolve(_: any, args: any) {
		const result = fUpdateTema(args.id, args.nombre);

		return result;
	},
};
