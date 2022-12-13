import { getAllOrdenes } from "../../../ORM_Queries/Orden/getAllOrdenes";
import { SendOrden } from "../../../SendTypes/SendOrden";

export async function GetAllOrdenes() {
    const msj = new SendOrden()

	try {

        const orden = await getAllOrdenes()

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