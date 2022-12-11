import { Libro } from "../../Entities/Libro";
import { Notificacion } from "../../Entities/Notificacion";
import { Usuario } from "../../Entities/Usuario";


export async function insertFav(isbn: string, id: number) 
{

    const libro = await Libro.find(
        {
            where:{
                isbn: isbn
            }
        }
    )

    let usuario = await Usuario.find(
        {
            relations:
            {
                favorito: true,
                notificacion: true
            },
            where:{
                id: id
            }
        }
    )
    
    if (usuario[0].favorito)
    {
        console.log(libro[0])
        usuario[0].favorito.push(libro[0]);
        const notificacion = new Notificacion();
        notificacion.mensaje = `'${libro[0].titulo}' SE AGREGÓ A FAVORITOS`;
        notificacion.usuario = usuario[0];

        await usuario[0].save();
        await notificacion.save();
    }
    

    
    
    usuario = await Usuario.find({
        relations:
        {
            favorito: true,
            notificacion: true,
        },
        where:{
            id: id
        }
    })

    return usuario
}