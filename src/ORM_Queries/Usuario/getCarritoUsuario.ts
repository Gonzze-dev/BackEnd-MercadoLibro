import { Usuario } from "../../Entities/Usuario"

export async function getCarritoUsuario(id: number) 
{
    const usuario = await Usuario.find({
        relations: {
            carrito: {
                libro: true
            },
        },
        where:
        {
            id: id
        }
    })

    return usuario
}