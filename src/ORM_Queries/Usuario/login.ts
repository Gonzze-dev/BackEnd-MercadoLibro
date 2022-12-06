import { Usuario } from "../../Entities/Usuario";

export async function login(correo: string, contrasenia: string) 
{
    const arrayUsuario = await Usuario.find(
        {
            relations:
            {
                orden:
                {
                    direccion_entrega: true
                },
                favorito: true,
                carrito: {
                    libro: true
                }
            },
            where:
            {
                correo: correo,
                contrasenia: contrasenia
            }
        }
    )
    
    const usuario = arrayUsuario[0]

    if (usuario && usuario.carrito )
    {
        for (let i = 0; i < usuario.carrito.length; i++) 
        {
            for (let j = 0; j < usuario.carrito.length; j++) 
            {
                if (usuario.carrito[i].libro.isbn = usuario.carrito[j].libro.isbn)
                {
                    usuario.carrito[i].cantidad = usuario.carrito[i].cantidad + (+ usuario.carrito[i].cantidad)
                    usuario.carrito.splice(j, 1)
                }
            }
        }
    }
    
    return arrayUsuario
}