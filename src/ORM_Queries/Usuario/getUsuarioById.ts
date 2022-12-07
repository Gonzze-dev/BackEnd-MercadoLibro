import { Linea_carrito } from "../../Entities/Linea_carrito";
import { Usuario } from "../../Entities/Usuario";

export async function getUsuarioById(id: number) 
{
    const usuario = await Usuario.find(
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

    return usuario
}