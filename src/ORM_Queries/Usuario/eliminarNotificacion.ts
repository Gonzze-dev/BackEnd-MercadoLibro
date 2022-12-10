import { Notificacion } from "../../Entities/Notificacion";

export async function eliminarNotificacion(idNotificacion: number) {

    const notificacion = await Notificacion.find({
        where:{
            id: idNotificacion
        }
    })

    if (notificacion[0])
    {
        notificacion[0].remove()
    }

    return 'NOTIFICACION ELIMINADA EXITOSAMENTE!!'
}