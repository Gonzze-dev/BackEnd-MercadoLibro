import { GraphQLString, GraphQLNonNull } from "graphql";
import { TipoUsuario } from "../../TypesDefs/user";

async function fGetUserByMail(correo: any) {
  try {
    const response = ''
    return response;
  } catch (err) {
    return err;
  }
}

export const GetUserByMail = {
  type: TipoUsuario,
  args: {
    correo: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(_: any, args: any) {
    const result = await fGetUserByMail(args.correo);
    return result;
  },
};