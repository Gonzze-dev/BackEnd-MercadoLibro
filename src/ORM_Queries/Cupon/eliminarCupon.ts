import { Cupon } from "../../Entities/Cupon";

export async function eliminarCupon(codigo_cupon: string) {
    const cupon = await Cupon.find({
        where:{
            codigo_cupon: codigo_cupon
        }
    })

    if (!cupon)
        throw (`Error, el cupon ${codigo_cupon} no existe`)

    await cupon[0].remove()
}