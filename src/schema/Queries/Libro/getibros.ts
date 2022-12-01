import { GraphQLList, GraphQLString } from "graphql";
import { getAllLibros } from "../../../ORM_Queries/Libro/getAllLibros";
import { getAllLibrosByCategoria } from "../../../ORM_Queries/Libro/getAllLibrosByCategoria";
import { TLibro } from "../../TypesDefs/libro";
import { jSend, TSend } from "../../TypesDefs/send";

async function selectFunction(args:  any)
{
    if (args.categoria)
    {
        return await getAllLibrosByCategoria(args.categoria)
    }
    else
    {
        return await getAllLibros()
    }
}

export async function fGetLibros(args: any) {
    const msj = jSend()
    try {

        const libro = await selectFunction(args)
        
        msj.message = "Libros obtenidos con exito!"
		msj.success = true;
		msj.object = libro;

        console.log('\n')
        console.log('\n')
        console.log('\n')
        console.log(libro)
        console.log('\n')
        console.log('\n')
        console.log('\n')
        
        return msj;
    } catch (err) {
        return msj;
    }
}

export const Getlibros = {
    type: TSend('Getlibros', TLibro),
    args: {
        categoria: {type: GraphQLString}
    },
    async resolve(_: any, args: any) {
        const result = await fGetLibros(args);
        return result;
    },
};