import { Autor } from "../../Entities/Autor";
import { insertAutor } from "./InsertAutor";

let autoresBd: Array<Autor> = []

export async function insertAutores(autores: Array<string>): Promise<Autor[]>
{
    

    autores.forEach( async autor => {
        autoresBd.push(await insertAutor(autor));
    });
    
    return autoresBd
}