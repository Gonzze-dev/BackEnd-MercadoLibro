import { Tema } from "../../Entities/Tema";
import { existsName } from "../Utilities/exists";
import { getElementByName } from "../Utilities/getElementByName";

export async function insertTema(tema: any): Promise<Tema>
{
    
    const existeTema = await existsName(tema.nombre, Tema);

    const obj_tema = new Tema();

    if (!existeTema)
    {
        
        
        obj_tema.nombre = tema.nombre;
        obj_tema.url_imagen = tema.url_imagen;

        await obj_tema.save()
    }

    // console.log('\n')
    // console.log('\n')
    // console.log('\n')
    // console.log(obj_tema.nombre)
    // console.log(tema.nombre)
    // console.log(obj_tema.url_imagen)
    // console.log(tema.url_imagen)
    // console.log(await getElementByName(tema.nombre, Tema))
    // console.log('\n')
    // console.log('\n')
    // console.log('\n')

    return await getElementByName(tema.nombre, Tema)
}