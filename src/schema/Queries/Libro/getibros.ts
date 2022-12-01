import { GraphQLString } from "graphql";
import { getAllLibros } from "../../../ORM_Queries/Libro/getAllLibros";
import { getAllLibrosByCategoria } from "../../../ORM_Queries/Libro/getAllLibrosByCategoria";
import { jSendLibro, TSendLibro } from "../../TypesDefs/sendLibro";

async function selectFunction(args:  any)
{
    if (args.categoria != '')
    {
        return await getAllLibrosByCategoria(args.categoria)
    }

    return await getAllLibros()
    
}

export async function fGetLibros(args: any) {
    const msj = jSendLibro()
    try {

        const libro = await selectFunction(args)
        
        msj.message = "Libros obtenidos con exito!"
		msj.success = true;
		msj.results.libro = libro

        console.log(msj.results.libro)
        
        return msj;
    } catch (err) {
        return msj;
    }
}

export const Getlibros = {
    type: TSendLibro,
    args: {
        categoria: {type: GraphQLString}
    },
    async resolve(_: any, args: any) {
        const result = await fGetLibros(args);
        return result;
    },
};