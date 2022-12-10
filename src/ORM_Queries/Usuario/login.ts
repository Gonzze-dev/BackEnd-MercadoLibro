import { ILike } from "typeorm";
import { Usuario } from "../../Entities/Usuario";

export async function login(correo: string, contrasenia: string) 
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
                direccion: true,
                notificacion: true
            },
            where:
            {
                correo: ILike(`${correo}`),
                contrasenia: contrasenia
            }
        }
    )

    if(!usuario[0])
    {
        throw "ERROR, CORREO O CONTRASEÑA INVALIDAS"
    }

    return usuario
}