import { Libro } from "../../Entities/Libro"
import { insertAutores } from "../Autor/insertAutores";
import { insertEditorial } from "../Editorial/insertEditorial";
import { insertIdioma } from "../Idioma/insertIdioma";
import { insertTemas } from "../Tema/insertTemas";
import { existsLibro } from "./existsLibro"

export async function insertLibro(isbn: string,
                                    imagen: string,
                                    titulo: string,
                                    fecha_edicion: string,
                                    precio: number,
                                    stock: number,
                                    descripcion: string,
                                    fecha_ingreso: Date,
                                    descuento: number,
                                    idioma: string,
                                    editorial: string,
                                    autor: Array<string>,
                                    tema: Array<string> )
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
        if (!fecha_ingreso)
        {
            obj_libro.fecha_ingreso = fecha_ingreso;
        }
        if (!fecha_ingreso)
        {
            obj_libro.descuento = descuento;
        }
        obj_libro.idioma = await insertIdioma(idioma);
        obj_libro.editorial = await insertEditorial(editorial);
        obj_libro.autor = await insertAutores(autor);
        obj_libro.tema = await insertTemas(tema);

        await obj_libro.save()
    }

    return obj_libro
}