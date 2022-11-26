import { Libro } from "../../Entities/Libro";

export async function getAllLibros() 
{

    const libro = await Libro.find()
    console.log(libro)
    return libro
}