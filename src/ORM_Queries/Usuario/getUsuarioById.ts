import { Usuario } from "../../Entities/Usuario";

export async function getUsuarioById(id: number) 
{
    const usuario = await Usuario.find(
        {
            relations:
            {
                orden:
                {
                    direccion_entrega: true,
                    cupon: true,
                    orden_detalle:{
                        libro: true
                    }
                },
                favorito: true,
                carrito: {
                    libro: true
                },
                direccion: true
            },
            where:
            {
                id: id
            }
    })

    return usuario
}