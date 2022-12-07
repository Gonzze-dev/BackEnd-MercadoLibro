
import { Libro } from "../../Entities/Libro";
import { Linea_carrito } from "../../Entities/Linea_carrito";
import { Usuario } from "../../Entities/Usuario";


export async function agregarProducto(cantidad: number, isbn: string, id: number) 
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
    
    if (usuario[0].carrito)
    {
        const producto = new Linea_carrito()

        producto.cantidad = cantidad;
        producto.libro = libro[0];
        producto.usuario = usuario[0];

        await producto.save();
    }
    

    usuario = await Usuario.find(
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

    return usuario
}