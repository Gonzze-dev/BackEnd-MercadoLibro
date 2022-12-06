import { Tema } from "../../Entities/Tema";
import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function insertTema(tema: any)
{
    const existeTema = await existsName(tema.nombre, Tema);

    const obj_tema = new Tema();

    // if (!existeTema)
    // {
    //     obj_tema.nombre = tema.nombre;
    //     obj_tema.url_imagen = tema.url_imagen;

    //     await obj_tema.save()
    // }


    return await getElementByName(tema.nombre, Tema)
}