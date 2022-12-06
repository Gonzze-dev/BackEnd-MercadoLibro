export const jSendUser = () =>
{
    return {
        message: "",
        success: false,
        status: 0,
        accessToken: '',
        usuario: {},
    }
}

export const jSendLibro = () =>
{
    return {
        message: "",
        success: false,
        status: 0,
        page: 0,
        totalPage: 0,
        libro: new Array
    }
}

export const jMercadoPago = () =>
{
    return {
        message: "",
        success: false,
        status: 0,
        init_point: ''
    }
}
