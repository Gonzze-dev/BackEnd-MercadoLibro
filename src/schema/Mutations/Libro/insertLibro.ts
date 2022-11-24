import { GraphQLFloat, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from "graphql";

async function fInsertLibro(isbn: number,
							imagen: string,
							titulo: string,
							fecha_edicion: String,
							precio: number,
							stock: number,
							descripcion: string,
							idioma: number,
							editorial: number,
							autor: Array<number>,
							tema: Array<number>) {

	try {



		return 'SE INSERTO EL LIBRO CON EXITO';

	} catch (err) {
		return err;
	}
}

export const InsertLibro = {
	type: GraphQLString,
	args: {
		isbn: {type: new GraphQLNonNull(GraphQLInt)},
		imagen: {type: new GraphQLNonNull(GraphQLString)},
		titulo: {type: new GraphQLNonNull(GraphQLString)},
		fecha_edicion: {type: new GraphQLNonNull(GraphQLString)},
		precio: {type: new GraphQLNonNull(GraphQLFloat)},
		stock: {type: new GraphQLNonNull(GraphQLInt)},
		descripcion: {type: GraphQLString},
		idioma: {type: new GraphQLNonNull(GraphQLInt)},
		editorial: {type: new GraphQLNonNull(GraphQLInt)},
		autor: {type: new GraphQLNonNull(new GraphQLList(GraphQLInt))},
		tema: {type: new GraphQLNonNull(new GraphQLList(GraphQLInt))},
	},
	async resolve(_: any, args: any) {
		const result = await fInsertLibro(args.isbn,
										  args.imagen,
										  args.titulo,
										  args.fecha_edicion,
										  args.precio,
										  args.stock,
										  args.descripcion,
										  args.idioma,
										  args.editorial,
										  args.autor,
										  args.tema);

		return result;
	},
};
