import { getUsuarioByMail } from "../../../ORM_Queries/Usuario/getUsuarioByMail";
import { updateUsuario } from "../../../ORM_Queries/Usuario/updateUsuarioById";
import { Send } from "../../../SendTypes/Send";


export async function UpdateUsuarioByMail (nombre: string, 
                                        correo: string, 
                                        contrasenia: string) 
{
    const msj = new Send();

    try {
        const usuario = await getUsuarioByMail(correo)
        await updateUsuario(nombre, correo, contrasenia, usuario)

        msj.message = "EL USUARIO SE REGISTRO CORRECTAMENTE!"
        msj.success = true;


        return msj;
    } catch (err: any) {
        msj.message = err
        msj.success = false;
        return msj;
    }
}