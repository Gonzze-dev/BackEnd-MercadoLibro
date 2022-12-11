import { Usuario } from "../../Entities/Usuario";

export async function getUsuarioById(id: number) 
{
    const usuario = await Usuario.find(
        {
            relations:
            {
                direccion: true,
                notificacion: true,
                carrito:{
                    libro: true
                },
                orden:
                {
                    direccion_entrega: true,
                    cupon: true,
                    orden_detalle:{
                        libro: true
                    }
                },
            },
            where:
            {
                id: id
            }
    })

    const usuario2 = await Usuario.find(
        {
            select:
            {
                favorito: {
                    isbn: true
                }
            },
            relations:
            {
                favorito: true
            },
            where:
            {
                id: id
            }
        }
    )

    return usuario
}