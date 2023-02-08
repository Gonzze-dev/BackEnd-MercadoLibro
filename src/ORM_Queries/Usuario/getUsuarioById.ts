import { Usuario } from "../../Entities/Usuario";
import { formatedDate } from "../Utilities/formatedDate";

export async function getUsuarioById(id: number) 
{
    const usuario = await Usuario.find({
        relations:
        {
            direccion: {
                ciudad: true
            },
            notificacion: true,
            carrito:{
                cupon: true,
                items: {
                    libro:{
                        autor: true
                    }
                }
            },
            orden:
            {
                cupon: true,
                orden_detalle:{
                    libro: {
                        autor: true
                    }
                }
            },
            favorito: true
        },
        where:
        {
            id: id,
        },
        order:{
            notificacion:{
                id: "DESC"
            }
        }
    })

    if (usuario[0] && usuario[0].orden)
    {
        for (const orden of usuario[0].orden) {
            orden.fecha = formatedDate(orden.fecha)
        }
    }
        

    return usuario
}