import { Usuario } from "../../Entities/Usuario";


export async function quitarProducto(cantidad: number, isbn: string, id: number) 
{

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
        const index = usuario[0].carrito.findIndex(obj => obj.libro.isbn === isbn)

        if (index != -1)
        {
            if(usuario[0].carrito[index].cantidad > 1)
            {
                usuario[0].carrito[index].cantidad = usuario[0].carrito[index].cantidad - (+ cantidad)
                await usuario[0].carrito[index].save()
            }
            else
            {
                await usuario[0].carrito[index].remove()
            }
        }
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