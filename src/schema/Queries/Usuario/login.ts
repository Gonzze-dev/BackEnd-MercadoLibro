import { GraphQLString, GraphQLNonNull } from "graphql";
import { sign } from "jsonwebtoken";
import { type } from "os";
import { secret } from "../../../config";
import { login } from "../../../ORM_Queries/Usuario/login";
import { authentication } from "../../TypesDefs/authentication";

async function fLogin(args: any) {
    let msj = {
        mensaje: "",
        success: false,
        accessToken: "",
        usuario: {}
    };

    try {
        const usuario = await login(args)

        const id_usuario: string = usuario.id.toString()

        msj.accessToken = sign(id_usuario, secret);
        msj.success = true;
        msj.usuario = usuario;
      
        return msj;
    } catch (err: any) {

        msj.accessToken = '';
        msj.success = false;
        msj.usuario = {};

        return msj;
    }
}

export const Login = {
    type: authentication,
    args: {
        correo: { type: new GraphQLNonNull(GraphQLString) },
        contrasenia: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(_: any, args: any) {
        const result = await fLogin(args);
        return result;
    },
};