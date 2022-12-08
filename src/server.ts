import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { LibroResolver } from "./schema/Resolvers/Libro/LibroResolver";
import { UsuarioResolver } from "./schema/Resolvers/Usuario/UsuarioResolver";
import { TemaResolver } from "./schema/Resolvers/Tema/TemaResolver";

import bodyParser from "body-parser";
import { MERCADO_PAGO_TOKEN } from "./config";
const mercadopago = require("mercadopago")

export async function startServer() {

  const app = express();
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [LibroResolver, UsuarioResolver, TemaResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  await server.start()

  app.use('/notificar', async (req, res) => {
      mercadopago.configure({access_token: MERCADO_PAGO_TOKEN});

      const {query} = req

      let payment: any
      //let merchantOrder: any

      console.log(query)
      const topic = query.topic || query.type;
      
      switch (topic) {
        case "payment":
          const paymentId = query.id || query['data.id'];
          payment = await mercadopago.payment.findById(paymentId)
          console.log(payment.body.additional_info.items)
          console.log(payment.body.status)
          //merchantOrder = await mercadopago.merchant_orders.findById(payment.body.order.id)
        break;
        // case "merchant_order":
        //   const orderId = query.id
        //   merchantOrder = await mercadopago.merchant_orders.findById(orderId)
        // break;
      }
      
      
    
    res.status(200)
  })

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}