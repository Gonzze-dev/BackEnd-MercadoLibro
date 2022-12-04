
import { Usuario } from "../../Entities/Usuario";

export async function signUp(args: any) 
{
    const obj_usuario = new Usuario();

    obj_usuario.nombre = args.nombre;
    obj_usuario.correo = args.correo;
    obj_usuario.contrasenia = args.contrasenia;
    
    await obj_usuario.save();
    
    const usuario = await Usuario.find(
        {
            where:{
                correo: args.correo
                
            }
        }
    )
    
    return usuario
}