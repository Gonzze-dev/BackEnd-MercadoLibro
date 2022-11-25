import { Usuario } from "../../Entities/Usuario";

async function login(args: any) 
{
    const usuario = await Usuario.find(
        {
            select:
            {
                id: true,
                nombre: true,
                admin: true,

            },
            where:
            {
                correo: args.correo,
                contrasenia: args.contrasenia
            }
        }
    )

    return usuario
}