import { Usuario } from "../../Entities/Usuario";

export async function getUsuarioById(id: number) 
{
    const usuario = await Usuario.find(
        {
            where:
            {
                id: id
            }
    })

    return usuario
}