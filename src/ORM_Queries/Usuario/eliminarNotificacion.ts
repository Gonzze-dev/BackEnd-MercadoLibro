import { Usuario } from "../../Entities/Usuario";

export async function eliminarNotificacion(idNotificacion: number, idUsuario: number) {

    const usuario = await Usuario.find({
        relations:{
            notificacion: true
        },
        where:{
            id: idUsuario
        }
    })

    if (usuario[0].notificacion)
    {
        const index = usuario[0].notificacion.findIndex(obj => obj.id === idNotificacion)
        usuario[0].notificacion.splice(index, 1);
        await usuario[0].save();
    }

    return 'NOTIFICACION ELIMINADA EXITOSAMENTE!!'
}