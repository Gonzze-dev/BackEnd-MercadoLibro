import { Cupon } from "../../Entities/Cupon";

export async function insertCupon(codigo_cupon: string, descuento: number) 
{
    const obj_cupon = new Cupon()

    obj_cupon.codigo_cupon = codigo_cupon
    obj_cupon.porc_descuento = descuento
    
    await obj_cupon.save()
}