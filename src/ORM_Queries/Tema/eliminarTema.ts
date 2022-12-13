import { Tema } from "../../Entities/Tema";

import { getElementByName } from "../Utilities/getElementByName";
 
export async function eliminarTema(nombre: string)
{
    const tema = await getElementByName(nombre, Tema);

    if(!tema[0])
        throw `ERROR, EL TEMA NO EXISTE`

    await tema[0].remove()
}