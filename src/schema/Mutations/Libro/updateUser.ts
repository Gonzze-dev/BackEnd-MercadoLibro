import { GraphQLFloat, GraphQLInt, GraphQLList, GraphQLString} from "graphql";

async function fUpdateLibro(isbnOriginal: number,
                            isbn: number,
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



		return 'SE MODIFICO EL LIBRO CON EXITO';

	} catch (err) {
		return err;
	}
}

export const UpdateLibro = {
	type: GraphQLString,
	args: {
        isbnOriginal: {type: GraphQLInt},
		isbn: {type: GraphQLInt},
		imagen: {type: GraphQLString},
		titulo: {type: GraphQLString},
		fecha_edicion: {type: GraphQLString},
		precio: {type: GraphQLFloat},
		stock: {type: GraphQLInt},
		descripcion: {type: GraphQLString},
		idioma: {type: GraphQLInt},
		editorial: {type: GraphQLInt},
		autor: {type: new GraphQLList(GraphQLInt)},
		tema: {type: new GraphQLList(GraphQLInt)},
	},
	async resolve(_: any, args: any) {
        
        const result = await fUpdateLibro(args.isbnOriginal,
                                            args.isbn,
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
