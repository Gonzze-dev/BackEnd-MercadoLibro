import { GraphQLNonNull, GraphQLInt } from "graphql";
import { Tidioma } from "../../TypesDefs/idioma";

async function fGetIdiomaById(id: number) {
  try {
    const response = ''
    return response;
  } catch (err) {
    return err;
  }
}

export const GetIdiomaById = {
  type: Tidioma,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(_: any, args: any) {
    const result = await fGetIdiomaById(args.id);
    return result;
  },
};