import { Cupon } from "../../Entities/Cupon";
import { Direccion_entrega } from "../../Entities/Direccion_entrega";
import { Orden } from "../../Entities/Orden";
import { Orden_detalle } from "../../Entities/Orden_detalle";
import { Payment_MP } from "../../Entities/Payment_MP";
import { Usuario } from "../../Entities/Usuario";
import { eliminarProducto } from "../Usuario/eliminarProducto";

export async function crearOrden(status: string, items: Array<any>, paymentId: string) 
{
    let totalPrecio: number = 0
    let totalCantidad: number = 0

    const idUsuario = items[0].id

    let orden = new Orden();

    if (status == 'approved')
    {
        const arr_usuario = await Usuario.find({
            relations: {
                direccion: true,
                carrito: {
                    libro: true
                }
            },
            where: {
                id: idUsuario
            }
        })

        const payment = await Payment_MP.find({
            where:{
                id: paymentId
            }
        })


        const usuario = arr_usuario[0]
          
        if (!payment[0]
            && (((usuario && usuario.carrito) && usuario.carrito[0])
            && (usuario.carrito[0].cupon 
            && (!usuario.carrito[0].cupon.utilizado || usuario.carrito[0].cupon.codigo_cupon == '-'))))
        {
            const cupon = await Cupon.find({
                where:{
                    codigo_cupon: usuario.carrito[0].cupon.codigo_cupon
                }
            })

            if (usuario.carrito[0].cupon.codigo_cupon != '-')
            {
                cupon[0].utilizado = true
                await cupon[0].save()
            }

            const obj_orden = new Orden()
            const direccion_entrega = new Direccion_entrega()

            direccion_entrega.nombre = usuario.direccion.nombre
            direccion_entrega.direccion = usuario.direccion.direccion
            direccion_entrega.infoAdicional = usuario.direccion.infoAdicional
            direccion_entrega.dni = usuario.direccion.dni
            direccion_entrega.telefono = usuario.direccion.telefono
            direccion_entrega.usuario = usuario
            direccion_entrega.ciudad = usuario.direccion.ciudad


            for (const item_carrito of usuario.carrito) 
            {

                totalPrecio = totalPrecio + (+ item_carrito.libro.precio)
                totalCantidad = totalCantidad +(+ item_carrito.cantidad)

            }

            obj_orden.usuario = usuario
            obj_orden.total = totalCantidad * totalPrecio
            obj_orden.cupon = usuario.carrito[0].cupon

            await direccion_entrega.save()
            obj_orden.direccion_entrega = direccion_entrega
            await obj_orden.save()


            for (const item_carrito of usuario.carrito) 
            {
                const obj_detalle = new Orden_detalle()

                obj_detalle.precio = item_carrito.libro.precio
                obj_detalle.cantidad = item_carrito.cantidad

                obj_detalle.libro = item_carrito.libro
                obj_detalle.orden = obj_orden
                await eliminarProducto(item_carrito.libro.isbn, idUsuario) 
                await obj_detalle.save()
            }
            const newPayment = new Payment_MP()
            newPayment.id = paymentId
            await newPayment.save()
            orden = obj_orden
        }
    }

    return orden
}