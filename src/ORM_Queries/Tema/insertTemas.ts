import { Tema } from "../../Entities/Tema";
import { insertTema } from "./insertTema";

export async function insertTemas(temas: Array<any>): Promise<Tema[]>
{
    const temasBd: Array<Tema> = []

    temas.forEach( async tema => {
        temasBd.push(await insertTema(tema));
        console.log(await temasBd)
    });
    
    


    return temasBd
}