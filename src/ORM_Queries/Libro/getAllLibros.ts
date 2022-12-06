import { Libro } from "../../Entities/Libro";

export async function getAllLibros() 
{

    const libro = await Libro.find(
        // {
        //     relations:
        //     {
        //         opinion:{
        //             usuario: false
        //         },
        //         puntuacion:{
        //             usuario: false
        //         }
        //     }
        // }
    )

    return libro
}