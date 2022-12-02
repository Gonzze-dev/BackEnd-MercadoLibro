import { Libro } from "../../Entities/Libro";

export async function getLibroByIsbn(isbn: string) 
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
                isbn: isbn
            }
        }
    )
    
    return libro
}