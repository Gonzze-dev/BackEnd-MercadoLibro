import { getAllOrdenes } from "../../../ORM_Queries/Orden/getAllOrdenes";
import { getOrdenesByFecha } from "../../../ORM_Queries/Orden/getOrdenesByFecha";
import { getOrdenesByFechaAndPage } from "../../../ORM_Queries/Orden/getOrdenesByPage";
import { SendOrden, SendOrdenByPage } from "../../../SendTypes/SendOrden";

async function selectOrdenesMethods(args: any) 
{
    if ((args.fechaMenor && args.fechaMayor)
        && (args.fechaMenor != '' && args.fechaMayor != ''))
    {
        return await getOrdenesByFecha(args.fechaMenor, args.fechaMayor)
    }

    return await getAllOrdenes()
}

export async function GetOrdenes(fechaMenor: string, fechaMayor: string) {
    const msj = new SendOrden()

	try {

        const orden = await getOrdenesByFecha(fechaMenor, fechaMayor)

        msj.message = 'ORDENES OBTENIDAS CON EXITO!!'
        msj.success = true
        msj.status = 200
        msj.orden = orden
		return msj;

	} catch (err: any) {

        msj.message = err
        msj.success = true
        msj.status = 404

		return msj;
	}
}

export async function GetOrdenesByFechaAndPage(fechaMenor: string, 
                                                fechaMayor: string, 
                                                limit: number,
                                                offset: number) {
    const msj = new SendOrdenByPage()

	try {

        if (!offset || offset <= 0 || offset == null) offset = 0
        if (!limit || limit <= 0 || limit == null) limit = 10
        
        const arrResult = await getOrdenesByFechaAndPage(fechaMenor, fechaMayor, limit, offset)
        let maxPage = arrResult[1]

        msj.message = 'ORDENES OBTENIDAS CON EXITO!!'
        msj.success = true
        msj.status = 200
        msj.orden = arrResult[0]

        if (maxPage == null) maxPage = 0

        msj.maxPage = Math.ceil(maxPage/limit)

		return msj;

	} catch (err: any) {

        msj.message = err
        msj.success = true
        msj.status = 404

		return msj;
	}
}