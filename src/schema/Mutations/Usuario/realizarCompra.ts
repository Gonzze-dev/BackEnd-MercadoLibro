import { GraphQLNonNull, GraphQLString} from "graphql";
import { verify } from "jsonwebtoken";

import { secret } from "../../../config"
import { realizarCompra } from "../../../ORM_Queries/Usuario/realizarCompra";
import { jMercadoPago, sendMercadoPago } from "../../TypesDefs/mercadopago";

async function fRealizarCompra(tokenUser: string) {
	let msj = jMercadoPago()

	try {
		const id = parseInt(<string>verify(tokenUser, secret))
		const res = await realizarCompra(id);
		
		msj.message = "realizada con exito!"
		msj.success = true;
		msj.init_point = res.body.sandbox_init_point

		return msj;
	} catch (err) {
		
		return msj;
	}
}

export const RealizarCompra = {
	type: sendMercadoPago,
	args: {
		tokenUser: { type: new GraphQLNonNull(GraphQLString) },
	},
	async resolve(_: any, args: any) {
		const result = await fRealizarCompra(args.tokenUser);

		return result;
	},
};
