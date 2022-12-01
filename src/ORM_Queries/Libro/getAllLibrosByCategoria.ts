import { Libro } from "../../Entities/Libro";

export async function getAllLibrosByCategoria(categoria: string) 
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
                tema: {
                    nombre: categoria
                }
            }
        }
    )
    console.log(libro)
    return libro
}