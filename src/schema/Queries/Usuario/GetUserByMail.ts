import { GraphQLString, GraphQLNonNull } from "graphql";
import { TUsuario } from "../../TypesDefs/usuario";

async function fGetUserByMail(correo: any) {
  try {
    const response = ''
    return response;
  } catch (err) {
    return err;
  }
}

export const GetUserByMail = {
  type: TUsuario,
  args: {
    correo: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(_: any, args: any) {
    const result = await fGetUserByMail(args.correo);
    return result;
  },
};