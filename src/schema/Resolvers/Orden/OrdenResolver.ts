
import { Resolver, Query} from "type-graphql";
import { SendOrden } from "../../../SendTypes/SendOrden";

import { GetAllOrdenes } from "../../Mutations/Orden/getAllOrdenes";

@Resolver()
export class OrdenRsolver
{

    @Query(() => SendOrden)
    async getVentas(){
        return await GetAllOrdenes();
    }

}