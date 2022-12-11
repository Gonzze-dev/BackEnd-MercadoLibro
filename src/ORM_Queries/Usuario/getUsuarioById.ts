import { Usuario } from "../../Entities/Usuario";

export async function getUsuarioById(id: number) 
{
    const usuario = await Usuario.find(
        {
            relations:
            {
                carrito:{
                    libro: true
                },
                notificacion: true,
            },
            where:
            {
                id: id
            }
    })

    return usuario
}