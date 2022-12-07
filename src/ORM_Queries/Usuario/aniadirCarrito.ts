
import { Libro } from "../../Entities/Libro";
import { Usuario } from "../../Entities/Usuario";


export async function aniadirCarrito(cantidad: number, isbn: string, id: number) 
{

    const libro = await Libro.find(
        {
            where:{
                isbn: isbn
            }
        }
    )

    let usuario = await Usuario.find(
        {
            relations:
            {
                carrito: true
            },
            where:{
                id: id
            }
        }
    )
    
    // if (usuario[0].carrito)
    // {
    //     const producto = new Linea_carrito
    //     usuario[0].carrito.push(libro[0]);
    //     await usuario[0].save();
    // }
    

    usuario = await Usuario.find(
        {
            relations:
            {
                favorito: true
            },
            where:{
                id: id
            }
        }
    )

    return usuario
}