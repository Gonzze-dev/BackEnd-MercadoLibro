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
    console.log(arrayUsuario[0])
    return arrayUsuario
}