import { Resolver, Query, Mutation, Arg} from "type-graphql";
import { Send } from "../../../SendTypes/Send";
import { SendTema } from "../../../SendTypes/SendTema";
import { InsertTema } from "../../Mutations/Tema/insertTema";
import { GetTemas } from "../../Queries/Tema/getTemas";

@Resolver()
export class TemaResolver
{
    @Query(() => SendTema)
    async getTemas()
    {
        return await GetTemas();
    }

    @Mutation(() => Send)
    async insertTema(@Arg('tema') tema: string)
    {
        return await InsertTema(tema);
    }

}