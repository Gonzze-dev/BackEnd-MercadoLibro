import { Between } from "typeorm";
import { Orden } from "../../Entities/Orden";
import { formatedDate, formatedStringToDate } from "../Utilities/formatedDate";



export async function getOrdenesByFechaAndPage(fechaMenor: string, 
                                        fechaMayor: string,
                                        limit: number,
                                        offset: number) {
    
    let fechaMenorFormateada = new Date(formatedStringToDate(fechaMenor))
    let fechaMayorFormateada = new Date(formatedStringToDate(fechaMayor))

    //Sumo un dia a la fecha a bsucar por que el between no evalua el dia final
    fechaMayorFormateada.setDate(fechaMayorFormateada.getDate() + 1)

    const ordenes = await Orden.findAndCount({
        relations:{
            cupon: true,
            orden_detalle:{
                libro: true
            }
        },
        where: {
            fecha: Between(
                fechaMenorFormateada, 
                fechaMayorFormateada
            ),
        },
        order:{
            id: 'DESC'
        },
        skip: offset,
        take: limit,
    })
    
    for (const orden of ordenes[0]) {
        orden.fecha = formatedDate(orden.fecha)
    }

    return ordenes
}