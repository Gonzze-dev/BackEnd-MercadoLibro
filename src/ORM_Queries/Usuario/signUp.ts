
import { Usuario } from "../../Entities/Usuario";

export async function signUp(nombre: string, 
                            correo: string, 
                            contrasenia: string) 
{
    const obj_usuario = new Usuario();

    obj_usuario.nombre = nombre;
    obj_usuario.correo = correo;
    obj_usuario.contrasenia = contrasenia;

    await obj_usuario.save();
    
    const usuario = await Usuario.find(
        {
            where:{
                correo: correo
            }
        }
    )
    
    return usuario
}