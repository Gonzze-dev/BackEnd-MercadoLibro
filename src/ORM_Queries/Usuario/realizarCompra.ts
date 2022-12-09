import axios from "axios";
import { MERCADO_PAGO_TOKEN, URL_NOTIFICACION } from "../../config";
import { Usuario } from "../../Entities/Usuario";
import { getCarritoUsuario } from "./getCarritoUsuario";

const mercadopago = require("mercadopago");

function getItems(usuario: Usuario): Array<any>
{
    let items: Array<any> = [];
    
    if (usuario.carrito)
    {
        usuario.carrito.forEach(linea_carrito => 
        {
            items.push({
                id: usuario.id,
                title: linea_carrito.libro.titulo,
                quantity: (+linea_carrito.cantidad),
                currency_id: "ARS",
                category: "Libro",
                unit_price: (+linea_carrito.libro.precio)
            });
        });
    }

    
    return items
}


async function crearLinkDePago(usuario: Usuario, items: any): Promise<string>
{
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
        payer: {
            name: usuario.nombre,
            email: usuario.correo
        },
        items: items,
        identification: {
            type: "DNI",
            number: usuario.direccion.dni
        },
        back_urls: {
            success: 'https://mercado-libro.vercel.app/checkout/success',
            failure: 'https://mercado-libro.vercel.app/checkout/pending',
            pending: 'mercado-libro.vercel.app/checkout/denied',
        },
        auto_return: 'approved',
        notification_url: `${URL_NOTIFICACION}/notificar`,
    };

    const payment = await axios.post(url, body, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${MERCADO_PAGO_TOKEN}`
        }
    });

    return payment.data.sandbox_init_point
}

// async function estadoPago()
// {
//     // main.get("https://music.youtube.com/", async (req, res) => {
//     //     const payment = await mercadopago.payment.findById(req.query.payment_id);
//     //     const merchantOrder = await mercadopago.merchant_orders.findById(payment.body.order.id);
//     //     const preferenceId = merchantOrder.body.preference_id;
//     //     const status = payment.body.status;

//     //     console.log(`Estado del pago ${status}`)
//     // });
// }

export async function realizarCompra (id: number) 
{
    let res = ""
    const usuario = await getCarritoUsuario(id)
    if (usuario)
    {
        const items = getItems(usuario[0])
        
        res = await crearLinkDePago(usuario[0], items)
    }
    

    return res
}