import { Puntuacion } from "../../Entities/Puntuacion";
import { libroComprado } from "./libroComprado";

export async function puntuo(isbn: string, id: number)
{
    const idPuntuacion = id.toString() + isbn

    if (!await libroComprado(isbn, id))
    {
        return true
    }
    
    const puntuacion = await Puntuacion.find({
        where:{
            usuario_libro: idPuntuacion
        }
    })

    return puntuacion[0]? true : false
}