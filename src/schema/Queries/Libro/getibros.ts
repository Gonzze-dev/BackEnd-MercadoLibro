import { getAllLibros } from "../../../ORM_Queries/Libro/getAllLibros";
import { getAllLibrosByCategoria } from "../../../ORM_Queries/Libro/getAllLibrosByCategoria";
import { getLibroByIsbn } from "../../../ORM_Queries/Libro/getLibroByIsbn";
import { getLibrosByReference } from "../../../ORM_Queries/Libro/getLibrosByReference";
import { jSendLibro } from "../../../sendTypes";
import { SendLibro } from "../../../SendTypes/SendLibro";

async function selectFunction(args:  any)
{
    if (args.categoria 
        && args.categoria != '')
    {
        return await getAllLibrosByCategoria(args.categoria)
    }else if(args.isbn && 
            args.isbn != '')
    {
        return await getLibroByIsbn(args.isbn)
    }
    else if(args.titulo
            && args.titulo != '')
    {
        return getLibrosByReference(args.titulo)
    }
    
    

    return await getAllLibros()
    
}

export async function GetLibros(args: any) {
    const msj = new SendLibro()

    try {

        const libro = await selectFunction(args)
        
        msj.message = "Libros obtenidos con exito!"
		msj.success = true;
		msj.libro = libro
        
        return msj;
    } catch (err) {
        
        return msj;
    }
}