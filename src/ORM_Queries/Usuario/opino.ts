import { Opinion } from "../../Entities/Opinion"
import { Orden } from "../../Entities/Orden"

export async function opino(isbn: string, id: number)
{
    const idPuntuacion = id.toString() + isbn
    
    const compro = await Orden.find({
        relations:{
            usuario: true,
            orden_detalle:{
                libro: true
            }
        },
        where:{
            usuario: {
                id: id
            },
            orden_detalle:{
                libro:{
                    isbn: isbn
                }
            }
        }
    })

    if (!compro[0])
    {
        return true
    }

    const opinion = await Opinion.find({
        where:{
            usuario_libro: idPuntuacion
        }
    })

    return opinion[0]? true : false
}