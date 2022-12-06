
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

