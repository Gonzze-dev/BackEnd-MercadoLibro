import { Args, ArgsType, Field } from "type-graphql";

import { Resolver, Query} from "type-graphql";
import { SendCupon } from "../../../SendTypes/SendCupon";
import { AgregarCupon } from "../../Mutations/Usuario/agregarCupon";
import { GetTemas } from "../../Queries/Tema/getTemas";
import { ArgsAgregarCupon } from "./argsDefs";

@Resolver()
export class CuponResolver
{
    

}