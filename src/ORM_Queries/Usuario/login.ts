import { Usuario } from "../../Entities/Usuario";

export async function login(args: any) 
{
    const usuario = await Usuario.find(
        {
            relations:{
                orden: {
                    direccion_entrega: true
                },
                favorito: true,
                carrito: {
                    libro: true
                },
            },
            where:
            {
                correo: args.correo,
                contrasenia: args.contrasenia
            }
        }
    )

    // console.log(usuario[0].orden[0].direccion_entrega)
    
    return usuario[0]
}