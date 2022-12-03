import { ILike } from "typeorm";
import { Libro } from "../../Entities/Libro";

export async function getLibrosByReference(titulo: string) 
{

    const libro = await Libro.find(
        {
            relations:
            {
                opinion:{
                    usuario: true
                },
                puntuacion:{
                    usuario: true
                }
            },
            where: {
                
                titulo: ILike(`%${titulo}%`)
            }
        }
    )

    return libro
}