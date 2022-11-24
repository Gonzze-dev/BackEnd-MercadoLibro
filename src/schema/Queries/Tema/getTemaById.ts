import { GraphQLNonNull, GraphQLInt } from "graphql";
import { Ttema } from "../../TypesDefs/tema";


async function fGetTemaById(id: number) {
  try {
    const response = ''
    return response;
  } catch (err) {
    return err;
  }
}

export const GetTemaById = {
  type: Ttema,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(_: any, args: any) {
    const result = await fGetTemaById(args.id);
    return result;
  },
};