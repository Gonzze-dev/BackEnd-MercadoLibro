import { GraphQLFloat, GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLString} from "graphql";
import { insertLibro } from "../../../ORM_Queries/Libro/insertLibro";
import { jSendLibro, TSendLibro } from "../../TypesDefs/sendLibro";

async function fInsertLibro(isbn: string,
							imagen: string,
							titulo: string,
							fecha_edicion: string,
							precio: number,
							stock: number,
							descripcion: string,
							fecha_ingreso: Date,
							descuento: number,
							idioma: string,
							editorial: string,
							autor: Array<string>,
							tema: Array<string>)
{
	const msj = jSendLibro()
	try {

		const libro = await insertLibro(isbn,
										imagen,
										titulo,
										fecha_edicion,
										precio,
										stock,
										descripcion,
										fecha_ingreso,
										descuento,
										idioma,
										editorial,
										autor,
										tema)
		
		msj.message = 'SE INSERTO EL LIBRO CON EXITO';
		msj.success = true;
		msj.status = 200;
		msj.libro.push(libro);

		return msj;

	} catch (err) {
		return err;
	}
}

export const InsertLibro = {
	type: TSendLibro,
	args: {
		isbn: {type: new GraphQLNonNull(GraphQLString)},
		imagen: {type: new GraphQLNonNull(GraphQLString)},
		titulo: {type: new GraphQLNonNull(GraphQLString)},
		fecha_edicion: {type: new GraphQLNonNull(GraphQLString)},
		precio: {type: new GraphQLNonNull(GraphQLFloat)},
		stock: {type: new GraphQLNonNull(GraphQLInt)},
		descripcion: {type: new GraphQLNonNull(GraphQLString)},
		fecha_ingreso: {type: GraphQLString},
		descuento: {type: GraphQLInt},
		idioma: {type: new GraphQLNonNull(GraphQLString)},
		editorial: {type: new GraphQLNonNull(GraphQLString)},
		autor: {type: new GraphQLNonNull(new GraphQLList(GraphQLString))},
		tema: {type: new GraphQLNonNull(new GraphQLList(GraphQLString))},
	},
	async resolve(_: any, args: any) {
		const result = await fInsertLibro(args.isbn,
										  args.imagen,
										  args.titulo,
										  args.fecha_edicion,
										  args.precio,
										  args.stock,
										  args.descripcion,
										  args.fecha_ingreso,
										  args.descuento,
										  args.idioma,
										  args.editorial,
										  args.autor,
										  args.tema);

		return result;
	},
};
