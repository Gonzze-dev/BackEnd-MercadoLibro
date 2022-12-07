import { Linea_carrito } from "../../Entities/Linea_carrito";
import { Usuario } from "../../Entities/Usuario";

export async function getUsuarioById(id: number) 
{
    const arrayUsuario = await Usuario.find(
        {
            relations:
            {
                orden:
                {
                    direccion_entrega: true
                },
                favorito: true,
                carrito: {
                    libro: true
                }
            },
            where:
            {
                id: id
            }
        }
    )

    const usuario = arrayUsuario[0]

    if (usuario && usuario.carrito )
    {

        for (let i = 0; i < usuario.carrito.length; i++) 
        {
            for (let j = i+1; j < usuario.carrito.length; j++) 
            {
                if (usuario.carrito[i].libro.isbn == usuario.carrito[j].libro.isbn)
                {
                    usuario.carrito[i].cantidad = usuario.carrito[i].cantidad + (+ usuario.carrito[j].cantidad)
                    usuario.carrito.splice(j, 1)
                    j--
                }
            }
        }
    }


    return arrayUsuario
}