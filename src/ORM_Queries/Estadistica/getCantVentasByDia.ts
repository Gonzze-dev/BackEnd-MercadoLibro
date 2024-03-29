import { AppDataSource } from "../../Connection/Connection";
import { Orden } from "../../Entities/Orden";

export async function getCantVentasByDia() 
{
    const vetnasDia = await AppDataSource
    .createQueryBuilder()
    .select("TO_CHAR(orden.fecha, 'dd/mm/yyyy') as fechaVentas,COUNT(orden.fecha) as ventas")
    .from(Orden, 'orden')
    .groupBy('fechaVentas')
    .getRawMany()

    return vetnasDia
}