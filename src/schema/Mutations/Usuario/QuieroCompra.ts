import { GraphQLNonNull, GraphQLString} from "graphql";
import { verify } from "jsonwebtoken";

import { secret } from "../../../config"
import { realizarCompra } from "../../../ORM_Queries/Usuario/realizarCompra";
import { jMercadoPago, TMercado_pago } from "../../TypesDefs/mercadopago";

import { jSend, TSend } from "../../TypesDefs/send";

async function fRealizarCompra(tokenUser: string) {
	let msj = jSend()
	let urls = jMercadoPago()

	try {
		const id = parseInt(<string>verify(tokenUser, secret))
		const res = await realizarCompra(id);
		
		msj.message = "realizada con exito!"
		msj.success = true;

		urls.init_point = res.body.init_point

		msj.object.push(urls)

		return msj;
	} catch (err) {
		
		return msj;
	}
}

export const RealizarCompra = {
	type: TSend('RealizarCompra', TMercado_pago),
	args: {
		tokenUser: { type: new GraphQLNonNull(GraphQLString) },
	},
	async resolve(_: any, args: any) {
		const result = await fRealizarCompra(args.tokenUser);

		return result;
	},
};
