import { GraphQLString } from "graphql";
import { getAllLibros } from "../../../ORM_Queries/Libro/getAllLibros";
import { getAllLibrosByCategoria } from "../../../ORM_Queries/Libro/getAllLibrosByCategoria";
import { getLibroByIsbn } from "../../../ORM_Queries/Libro/getLibroByIsbn";
import { getLibrosByReference } from "../../../ORM_Queries/Libro/getLibrosByReference";
import { jSendLibro, TSendLibro } from "../../TypesDefs/sendLibro";

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

export async function fGetLibros(args: any) {
    const msj = jSendLibro()
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

export const Getlibros = {
    type: TSendLibro,
    args: {
        categoria: {type: GraphQLString},
        isbn: {type: GraphQLString},
        titulo: {type: GraphQLString}
    },
    async resolve(_: any, args: any) {
        const result = await fGetLibros(args);
        return result;
    },
};