import { eliminarCupon } from "../../../ORM_Queries/Cupon/eliminarCupon";
import { insertCupon } from "../../../ORM_Queries/Cupon/insertCupon";
import { Send } from "../../../SendTypes/Send";

export async function EliminarCupon(codigo_cupon: string) {
    const msj = new Send()

	try {

        await eliminarCupon(codigo_cupon)

        msj.message = 'CUPON ELIMINADO CON EXITO!!!'
        msj.success = true
        msj.status = 200

		return msj;

	} catch (err) {
		return err;
	}
}
