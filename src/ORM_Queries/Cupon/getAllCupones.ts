import { Cupon } from "../../Entities/Cupon";

export async function getAllCupones() {

    const cupones = await Cupon.find()

    return cupones
}