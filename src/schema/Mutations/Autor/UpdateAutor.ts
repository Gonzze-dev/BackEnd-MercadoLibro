import { GraphQLInt, GraphQLNonNull, GraphQLString} from "graphql";
async function fUpdateAutor(id: number, nombre: String) {

	try {
		
		return 'SE MODIFICO EL AUTOR CON EXITO';

	} catch (err) {
		return err;
	}
}

export const UpdateAutor = {
	type: GraphQLString,
	args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
		nombre: { type: new GraphQLNonNull(GraphQLString) }
	},
	async resolve(_: any, args: any) {
		const result = fUpdateAutor(args.id, args.nombre);

		return result;
	},
};
