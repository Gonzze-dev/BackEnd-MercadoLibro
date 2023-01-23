import { Cupon } from "../../Entities/Cupon";
import { paginacion } from "../Utilities/paginacion";



export async function getAllCuponesByPage(limit: number, offset: number) {

    const cupones = await Cupon.findAndCount({
        skip: offset,
        take: limit
    })

    return cupones
}