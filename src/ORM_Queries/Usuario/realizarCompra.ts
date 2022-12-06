import { MERCADO_PAGO_TOKEN } from "../../config";
import { Linea_carrito } from "../../Entities/Linea_carrito";
import { Usuario } from "../../Entities/Usuario";
import { getCarritoUsuario } from "./getCarritoUsuario";
const mercadopago = require("mercadopago");

function getItems(usuario: Usuario): Array<any>
{
    let items: Array<any> = [];
    
    usuario.carrito.forEach(linea_carrito => 
    {
        items.push({
            title: linea_carrito.libro.titulo,
            quantity: (+linea_carrito.cantidad),
            currency_id: "ARS",
            unit_price: (+linea_carrito.libro.precio)
        });
    });
    
    return items
}


async function generateLinkMercadoPago(items: any) 
{
    mercadopago.configure({access_token: MERCADO_PAGO_TOKEN});
    
    const preference = {
        items: items,
        back_urls: {
            success: 'https://music.youtube.com/',
            failure: 'https://www.mercadopago.com.ar/developers/es/reference',
            pending: 'https://www.google.com/',
        },
        auto_return: 'approved'
    };

    return mercadopago.preferences
    .create(preference)
    .then(function (response: any) {
        return response;
    })
    .catch(function (error: any) {
        console.log(error);
        return null;
    });
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
    const usuario = await getCarritoUsuario(id)
    const items = getItems(usuario[0])
    const res = await generateLinkMercadoPago(items)

    return res
}