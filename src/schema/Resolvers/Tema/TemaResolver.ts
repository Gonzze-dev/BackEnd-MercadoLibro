import { Resolver, Query, Mutation, Arg, Args} from "type-graphql";
import { Send } from "../../../SendTypes/Send";
import { SendTema } from "../../../SendTypes/SendTema";
import { InsertTema } from "../../Mutations/Tema/insertTema";
import { GetTemas } from "../../Queries/Tema/getTemas";
import { ArgsInsertTema } from "./argsDefs";

@Resolver()
export class TemaResolver
{
    @Query(() => SendTema)
    async getTemas()
    {
        return await GetTemas();
    }

    @Mutation(() => Send)
    async insertTema(@Args() {tema, url_imagen}:ArgsInsertTema)
    {
        return await InsertTema(tema, url_imagen);
    }

}