import { GraphQLString, GraphQLNonNull } from "graphql";
import { sign } from "jsonwebtoken";

import { secret } from "../../../config";
import { login } from "../../../ORM_Queries/Usuario/login";
import { jSendUser, TSendUser } from "../../TypesDefs/sendUser";
import { TUsuario } from "../../TypesDefs/usuario";

async function fLogin(args: any) {
    const msj = jSendUser()

    try {
        const usuario = await login(args.correo, args.contrasenia)

        const id_usuario: string = usuario[0].id.toString()

        msj.accessToken = sign(id_usuario, secret);
        msj.success = true;
        msj.object = usuario;
      
        return msj;
    } catch (err: any) {

        return msj;
    }
}

export const Login = {
    type: TSendUser('Login', TUsuario),
    args: {
        correo: { type: new GraphQLNonNull(GraphQLString) },
        contrasenia: { type: new GraphQLNonNull(GraphQLString) },
    },
    async resolve(_: any, args: any) {
        const result = await fLogin(args);
        return result;
    },
};