
import { Resolver, Query, Args} from "type-graphql";
import { SendOrdenByPage } from "../../../SendTypes/SendOrden";

import { GetOrdenesByFechaAndPage } from "../../Mutations/Orden/getAllOrdenes";
import { ArgsGetVentasByPage } from "./argsDefs";

@Resolver()
export class OrdenRsolver
{

    @Query(() => SendOrdenByPage)
    async getVentas(@Args() {fechaMenor, fechaMayor, limit, offset}: ArgsGetVentasByPage){
        return await GetOrdenesByFechaAndPage(fechaMenor, fechaMayor, limit, offset);
    }

}