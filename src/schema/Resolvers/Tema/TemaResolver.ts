import { Resolver, Query} from "type-graphql";
import { SendTema } from "../../../SendTypes/SendTema";
import { GetTemas } from "../../Queries/Tema/getTemas";

@Resolver()
export class TemaResolver
{
    @Query(() => SendTema)
    async getTemas()
    {
        return await GetTemas();
    }

}