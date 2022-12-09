import { Opinion } from "../../Entities/Opinion";
import { Usuario } from "../../Entities/Usuario";

async function opinar(comentario: string, isbn: string, id: number) 
{
    const opinion = new Opinion()
    
    const usuario = await Usuario.find({
        where:{
            id: id
        }
    })

    opinion.usuario_libro = id.toString() + isbn;
    opinion.usuario = usuario[0]
}