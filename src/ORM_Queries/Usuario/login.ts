import { Usuario } from "../../Entities/Usuario";

export async function login(args: any) 
{
    const usuario = await Usuario.find(
        {
            relations:{
                orden: true,
                libro: true,
            },
            where:
            {
                correo: args.correo,
                contrasenia: args.contrasenia
            }
        }
    )

    console.log(usuario[0].orden[0])
    
    return usuario[0]
}