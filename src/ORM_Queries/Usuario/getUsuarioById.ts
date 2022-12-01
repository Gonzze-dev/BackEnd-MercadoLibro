import { Usuario } from "../../Entities/Usuario";

export async function getUsuarioById(id: number) 
{
    const usuario = await Usuario.find(
        {
            relations:{
                orden: {
                    direccion_entrega: {
                        ciudad: {
                            provincia:{
                                pais: true
                            }
                        }
                    }
                },
                favorito: true,
                carrito: {
                    libro: true
                },
            },
            where:
            {
                id: id
            }
        }
    )

    return usuario
}