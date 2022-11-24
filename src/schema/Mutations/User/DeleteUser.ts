import { GraphQLID, GraphQLNonNull, GraphQLString} from "graphql";

async function fDeleteUserByMail(correo: any) {
	

	try {
	
		return `USUARIO CON CUIL ${correo} ELIMINADO`;
	} catch (err) {
		return err;
	}
}

export const DeleteUserByMail = {
	type: GraphQLString,
	args: {
		correo: { type: new GraphQLNonNull(GraphQLID) },
	},
	async resolve(_: any, args: any) {
		const result = await fDeleteUserByMail(args.correo);
		return result;
	},
};
