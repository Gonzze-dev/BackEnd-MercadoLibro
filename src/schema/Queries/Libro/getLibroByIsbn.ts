import { GraphQLNonNull, GraphQLInt } from "graphql";
import { TLibro } from "../../TypesDefs/libro";
import { TSend } from "../../TypesDefs/send";


export async function fGetLibroByIsbn(isbn: number) {
try {

const response = ''
return response;
} catch (err) {
return err;
}
}

export const GetLibroByIsbn = {
    type: TSend('GetLibroByIsbn', TLibro),
    args: {
        isbn: { type: new GraphQLNonNull(GraphQLInt) },
    },
        async resolve(_: any, args: any) {
        const result = await fGetLibroByIsbn(args.isbn);
        return result;
    },
};