export const getRecuperarContraseniaHtml = (message: string, contrasenia: string): string =>
{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body> 
        <div style="color: black; text-align: center; font-family: sans-serif; font-weight: 100; font-size: 32px;">
            <div style="width: 100%; background-color: white;">
                <p>
                    <span  style="font-weight: bold; font-size: 48px;">Mercado</span><span style="font-style: italic; font-size: 48px;">Libro</span>
                </p>
            </div>
    
            <div style="margin-top: 20px; width: 100%;">
                <p>
                    ${message}
                </p>
    
                <hr style="margin-top: 3rem; color: rgb(243, 243, 243); background-color: rgb(243, 243, 243); width: 30%;"/>
    
                <p style="font-weight: bold;">
                    CONTRASEÑA
                </p>
    
                <div style="margin-top: 10px; padding: 0.1px; margin-right: 35%; margin-left: 35%; background-color: rgb(243, 243, 243);">
                    <p>
                        ${contrasenia}
                    </p>
                </div>
            </div>
        </div>
    </body>
    </html>
    `
}