import { Tema } from "../../Entities/Tema";
import { existsName } from "../Utilities/exists";

export async function insertTema(tema: any)
{
    const existeTema = await existsName(tema, Tema);
    

    if (existeTema)
    {
        throw `ERROR, EL TEMA ${tema} YA EXISTE`
    }

    const obj_tema = new Tema();

    obj_tema.nombre = tema.nombre;
    obj_tema.url_imagen = tema.url_imagen;

    await obj_tema.save()
}