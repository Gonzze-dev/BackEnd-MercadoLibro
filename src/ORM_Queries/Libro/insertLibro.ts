import { Libro } from "../../Entities/Libro"
import { insertAutor } from "../Autor/InsertAutor";
import { insertEditorial } from "../Editorial/insertEditorial";
import { insertIdioma } from "../Idioma/insertIdioma";
import { insertTema } from "../Tema/insertTema";
import { existsLibro } from "./existsLibro"

export async function insertLibro(isbn: string,
                                    imagen: string,
                                    titulo: string,
                                    fecha_edicion: string,
                                    precio: number,
                                    stock: number,
                                    descripcion: string,
                                    fecha_ingreso: string = '',
                                    descuento: number = 0,
                                    idioma: string,
                                    editorial: string,
                                    autores: Array<string>,
                                    temas: Array<any>)
{

    const exists = await existsLibro(isbn)
    const obj_libro = new Libro();

    if (!exists)
    {
        obj_libro.isbn = isbn;
        obj_libro.url_imagen = imagen;
        obj_libro.titulo = titulo;
        obj_libro.fecha_edicion = fecha_edicion;
        obj_libro.precio = precio;
        obj_libro.stock = stock;
        obj_libro.descripcion = descripcion;

        if (fecha_ingreso)
        {
            obj_libro.fecha_ingreso = new Date(fecha_ingreso);
        }
        if (descuento > 0)
        {
            obj_libro.descuento = descuento;
        }

        obj_libro.idioma = await insertIdioma(idioma);
        obj_libro.editorial = await insertEditorial(editorial);


        // const mapAutores = async (autores: any[]) => {
        //     console.log('Start')
        
        //     const promisesAutor = autores.map(async autor => {
        //         const arrayAutor = await insertAutor(autor)
        //         return arrayAutor
        //     })
            
        //     const autor = await Promise.all(promisesAutor)

        //     return autor
        // }

        obj_libro.autor = []
        for (const autor of autores) {
            obj_libro.autor.push(await insertAutor(autor))
        }

        obj_libro.tema = []
        for (const tema of temas) {
            obj_libro.tema.push(await insertTema(tema))
        }

        // const mapTemas = async (temas: any[]) => 
        // {
        //     const promisesTemas = temas.map(async tema => {
        //         const arrayTemas = await insertTema(tema)
        //         return arrayTemas
        //     })
            
        //     const arrayTemas = await Promise.all(promisesTemas)
        //     return arrayTemas
        // }

        await obj_libro.save()
    }

    return obj_libro
}