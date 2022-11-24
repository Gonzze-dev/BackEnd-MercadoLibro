import { GraphQLNonNull, GraphQLInt } from "graphql";
import { TAutor } from "../../TypesDefs/autor";


async function fGetAutorById(id: number) {
  try {
    const response = ''
    return response;
  } catch (err) {
    return err;
  }
}

export const GetAutorById = {
  type: TAutor,
  args: {
    id: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(_: any, args: any) {
    const result = await fGetAutorById(args.id);
    return result;
  },
};