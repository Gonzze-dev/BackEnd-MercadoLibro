import { Libro } from "../../Entities/Libro";

export async function getAllLibros() 
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
            }
        }
    )
    console.log(libro)
    return libro
}