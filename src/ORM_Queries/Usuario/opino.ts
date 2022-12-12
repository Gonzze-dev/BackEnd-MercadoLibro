import { Opinion } from "../../Entities/Opinion"
import { Orden } from "../../Entities/Orden"
import { libroComprado } from "./libroComprado"

export async function opino(isbn: string, id: number)
{
    const idPuntuacion = id.toString() + isbn

    if (! await libroComprado(isbn, id))
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