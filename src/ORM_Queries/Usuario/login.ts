import { ILike } from "typeorm";
import { Usuario } from "../../Entities/Usuario";

export async function login(correo: string, contrasenia: string) 
{
    const usuario = await Usuario.find({
        select:{
            nombre: true,
            correo: true,
            contrasenia: true,
            admin: true,
            direccion: {
                direccion: true,
                nombre: true,
                infoAdicional: true,
                dni: true,
                telefono: true,
                ciudad: {
                    cp: true
                }
            },
            notificacion:{
                id: true,
                mensaje: true
            },
            carrito: {
                nro_linea: true,
                cantidad: true,
                cupon:{
                    codigo_cupon: true,
                    porc_descuento: true,
                    utilizado: true
                },
                libro:{
                    isbn: true,
                    url_imagen: true,
                    titulo: true,
                    fecha_edicion: true,
                    precio: true,
                    stock: true,
                    descripcion: true,
                    descuento: true,
                    autor: {
                        nombre: true
                    },
                }
            },
            favorito:{
                isbn: true
            },
            orden:{
                fecha: true,
                total: true,
                cupon:{
                    codigo_cupon: true,
                    porc_descuento: true,
                    utilizado: true
                },
                orden_detalle:{
                    cantidad: true,
                    precio: true,
                    libro: {
                        url_imagen: true,
                        titulo: true,
                        precio: true,
                        fecha_edicion: true,
                        autor: {
                            nombre: true
                        }
                    }
                }
            }
        },
        relations:
        {
            direccion: {
                ciudad: true
            },
            notificacion: true,
            carrito:{
                cupon: true,
                libro: {
                    autor: true
                }
            },
            orden:
            {
                cupon: true,
                orden_detalle:{
                    libro: {
                        autor: true
                    }
                }
            },
            favorito: true
        },
        where:
        {
            correo: ILike(`${correo}`),
            contrasenia: contrasenia
        }
    })

    if(!usuario[0])
    {
        throw "ERROR, CORREO O CONTRASEÑA INVALIDAS"
    }
    
    return usuario
}