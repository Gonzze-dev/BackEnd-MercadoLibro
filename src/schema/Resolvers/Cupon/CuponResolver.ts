import { Arg, Args, Mutation, Query } from "type-graphql";

import { Resolver} from "type-graphql";
import { Send } from "../../../SendTypes/Send";
import { InsertCupon } from "../../Mutations/Cupon/insertCupon";
import { ArgsGetCupones, ArgsInsertCupon } from "./argsDefs";
import { SendCupones } from "../../../SendTypes/SendCupones";
import { GetAllCuponesByPage } from "../../Queries/Cupon/getCupones";
import { EliminarCupon } from "../../Mutations/Cupon/eliminarCupon";


@Resolver()
export class CuponResolver
{
    @Query(() => SendCupones)
    async getCupones(@Args() {limit, offset}: ArgsGetCupones) 
    {
        return await GetAllCuponesByPage(limit, offset)
    }
    
    @Mutation(() => Send)
    async insertCupon(@Args() {codigo_cupon, descuento}: ArgsInsertCupon)
    {
        return await InsertCupon(codigo_cupon, descuento);
    }

    @Mutation(() => Send)
    async eliminarCupon(@Arg('codigo_cupon') codigo_cupon: string)
    {
        return await EliminarCupon(codigo_cupon);
    }
}