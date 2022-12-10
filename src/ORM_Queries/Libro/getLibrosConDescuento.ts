import { MoreThan } from "typeorm";
import { Libro } from "../../Entities/Libro";

export async function getLibrosConDescuento() 
{

    const libro = await Libro.find({
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
            descuento: MoreThan(0)
        }
    })

    return libro
}