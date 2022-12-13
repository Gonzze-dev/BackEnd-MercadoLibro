import { getLibroByIsbn } from "./getLibroByIsbn";

export async function eliminarLibro(isbn: string){
    const libro = await getLibroByIsbn(isbn)

    if(!libro[0])
        throw `ERROR, EL LIBRO CON ISBN ${isbn} NO EXISTE!`

    await libro[0].remove()
}