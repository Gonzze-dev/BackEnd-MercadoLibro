import { Autor } from "../../Entities/Autor";
import { insertAutor } from "./InsertAutor";

export async function insertAutores(autores: Array<string>): Promise<Autor[]>
{
    let autoresBd: Array<Autor> = []

    autores.forEach( async autor => {
        autoresBd.push(await insertAutor(autor));
    });
    
    return autoresBd
}