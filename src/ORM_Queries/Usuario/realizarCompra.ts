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
    mercadopago.configure({access_token:"TEST-102529111039618-111319-be2cad25aff0465082c188157129480d-184613295"});
    
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

export async function realizarCompra (id: number) 
{
    const usuario = await getCarritoUsuario(id)
    const items = getItems(usuario[0])
    const res = await generateLinkMercadoPago(items)

    return res
}