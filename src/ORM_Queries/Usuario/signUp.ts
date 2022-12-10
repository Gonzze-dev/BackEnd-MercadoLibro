
import { Usuario } from "../../Entities/Usuario";

export async function signUp(nombre: string, 
                            correo: string, 
                            contrasenia: string) 
{
    let usuario = await Usuario.find(
        {
            where:{
                correo: correo
            }
        }
    )

    if (usuario[0])
    {
        throw "ERROR, YA HAY UN USUAIRO REGITRADO CON ESTE CORREO"
    }

    const obj_usuario = new Usuario();

    obj_usuario.nombre = nombre;
    obj_usuario.correo = correo;
    obj_usuario.contrasenia = contrasenia;

    await obj_usuario.save();
    
    usuario = await Usuario.find(
        {
            where:{
                correo: correo
            }
        }
    )
    
    return usuario
}