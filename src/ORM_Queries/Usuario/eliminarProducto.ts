import { Usuario } from "../../Entities/Usuario";


export async function eliminarProducto(isbn: string, id: number) 
{

    let usuario = await Usuario.find({
        relations:
        {
            carrito: true
        },
        where:{
            id: id
        }
    })
    
    if (usuario[0].carrito)
    {
        const index = usuario[0].carrito.findIndex(obj => obj.libro.isbn === isbn)

        if (index != -1)
        {
            await usuario[0].carrito[index].remove()
        }
    }
 
}