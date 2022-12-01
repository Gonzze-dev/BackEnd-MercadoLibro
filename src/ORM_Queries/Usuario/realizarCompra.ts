import { Usuario } from "../../Entities/Usuario";
const mercadopago = require("mercadopago");

async function cargarItems()
{
    return null
}

async function comprarMercadoPago() 
{
    mercadopago.configure({access_token:
        "TEST-102529111039618-111319-be2cad25aff0465082c188157129480d-184613295"});

    const preference = {

        items: [
            {

                title: "Test",
                quantity: 1,
                currency_id: "ARS",
                unit_price: 10,
                back_urls: { failure: "www.mercadopago.com", pending: 'www.google.com', success: 'www.mercadolibre.com'  },
                auto_return: 'approved',
                redirect_urls: { failure: 'www.mercadopago.com', pending: 'www.google.com', success: 'www.mercadolibre.com' },
                "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
            },
        ],
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

    // const usuario = await Usuario.find(
    //     {
    //         relations:{
    //             orden: {
    //                 direccion_entrega: {
    //                     ciudad: {
    //                         provincia:{
    //                             pais: true
    //                         }
    //                     }
    //                 }
    //             },
    //             favorito: true,
    //             carrito: {
    //                 libro: true
    //             },
    //         },
    //         where:
    //         {
    //             id: id
    //         }
    //     }
    // )

    

    const res = await comprarMercadoPago()
    console.log(res)
    return res
}