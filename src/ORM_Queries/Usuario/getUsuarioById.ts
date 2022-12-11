import { Usuario } from "../../Entities/Usuario";

export async function getUsuarioById(id: number) 
{
    const usuario = await Usuario.find(
        {
            relations:
            {
                direccion: true,
                favorito: true,
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

    return usuario
}