import { GraphQLList } from "graphql";
import { getAllLibros } from "../../../ORM_Queries/Libro/getAllLibros";
import { TLibro } from "../../TypesDefs/libro";


export async function fGetAllLibro() {
  try {
    const response = getAllLibros()
    
    return response;
  } catch (err) {
    return err;
  }
}

export const GetAllLibros = {
  type: new GraphQLList(TLibro),
  args: {},
  async resolve(_: any, args: any) {
    const result = await fGetAllLibro();
    return result;
  },
};