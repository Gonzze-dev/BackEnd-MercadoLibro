import { getAllCupones } from "../../../ORM_Queries/Cupon/getAllCupones"
import { getAllCuponesByPage } from "../../../ORM_Queries/Cupon/getAllCuponesByPage"
import { SendCupones } from "../../../SendTypes/SendCupones"


export async function GetAllCuponesByPage(limit: number, offset: number) 
{
    const msj = new SendCupones()

    try 
    {
        if (!offset || offset <= 0 || offset == null) offset = 0
        if (!limit || limit <= 0 || limit == null) limit = 10

        const arrResult = await getAllCuponesByPage(limit, offset)

        msj.cupones = arrResult[0]
        msj.maxPage = Math.ceil(arrResult[1]/limit)
        msj.message = 'CUPONES OBTENIDOS CON EXITO!'
        msj.status = 200
        msj.success = false
        
        return msj
    } catch (error: any) 
    {
        msj.message = error
        msj.status = 400
        
        return msj
    }
}

async function GetAllCupones() 
{
    const msj = new SendCupones()

    try 
    {
        
        msj.cupones = await getAllCupones()

        msj.message = 'CUPONES OBTENIDOS CON EXITO!'
        msj.status = 200
        msj.success = false
        
        return msj
    } catch (error: any) 
    {
        msj.message = error
        msj.status = 400
        
        return msj
    }
}