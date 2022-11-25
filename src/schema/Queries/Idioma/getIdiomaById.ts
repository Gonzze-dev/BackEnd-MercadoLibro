import { GraphQLNonNull, GraphQLInt, GraphQLString } from "graphql";
import { TIdioma } from "../../TypesDefs/idioma";

async function fGetIdiomaById(id: number) {
  try {
    const response = ''
    return response;
  } catch (err) {
    return err;
  }
}

export const GetIdiomaById = {
  type: TIdioma,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(_: any, args: any) {
    const result = await fGetIdiomaById(args.id);
    return result;
  },
};