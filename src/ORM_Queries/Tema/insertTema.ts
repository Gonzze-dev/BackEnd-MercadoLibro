import { Tema } from "../../Entities/Tema";
import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function insertTema(tema: any): Promise<Tema>
{
    
    const existeTema = await existsName(tema.nombre, Tema);

    if (!existeTema)
    {
        const obj_tema = new Tema();
        
        obj_tema.nombre = tema.nombre;
        obj_tema.url_imagen = tema.url_imagen;

        await obj_tema.save()
    }

    return await getElementByName(tema.nombre, Tema)
}