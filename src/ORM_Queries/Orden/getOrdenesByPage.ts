import { Between } from "typeorm";
import { Orden } from "../../Entities/Orden";

export async function getOrdenesByFechaAndPage(fechaMenor: string, 
                                        fechaMayor: string,
                                        limit: number,
                                        offset: number) {

    const ordenes = await Orden.findAndCount({
        relations:{
            cupon: true,
            orden_detalle:{
                libro: true
            }
        },
        where: {
            fecha: Between(
                fechaMenor, 
                fechaMayor
            ),
        },
        skip: offset,
        take: limit
    })
    
    return ordenes
}