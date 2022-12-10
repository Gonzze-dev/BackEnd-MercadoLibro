
import { Cupon } from "../../Entities/Cupon";
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

    let cupon = await Cupon.find({
        where:{
            codigo_cupon: '-'
        }
    })
    
    if (usuario[0].carrito)
    {
        const index = usuario[0].carrito.findIndex(obj => obj.libro.isbn === isbn)

        if (index == - 1)
        {
            const producto = new Linea_carrito()
            producto.cantidad = cantidad;
            producto.libro = libro[0];
            producto.usuario = usuario[0];
            producto.cupon = cupon[0]
            await producto.save();
        }
        else
        {
            usuario[0].carrito[index].cantidad = usuario[0].carrito[index].cantidad + (+ cantidad)
            await usuario[0].carrito[index].save()
        }

    }
    

    usuario = await Usuario.find({
        relations:{
            carrito: true
        },
        where:{
            id: id
        }
    })

    return usuario
}