
import jwt from 'jsonwebtoken'

import { secret } from "../../config";

import { Libro } from "../../Entities/Libro";
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
                favorito: true
            },
            where:{
                id: id
            }
        }
    )

    usuario[0].favorito.push(libro[0]);

    await usuario[0].save();
    
    usuario = await Usuario.find(
        {
            relations:
            {
                favorito: true
            },
            where:{
                id: id
            }
        }
    )

    return usuario
}