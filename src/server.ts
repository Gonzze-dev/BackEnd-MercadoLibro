import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { LibroResolver } from "./schema/Resolvers/Libro/LibroResolver";
import { UsuarioResolver } from "./schema/Resolvers/Usuario/UsuarioResolver";
import { TemaResolver } from "./schema/Resolvers/Tema/TemaResolver";

import bodyParser from "body-parser";
import { MERCADO_PAGO_TOKEN } from "./config";
import { crearOrden } from "./ORM_Queries/Orden/crearOrden";

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

  app.post('/notificar', async (req: any, res: any) => {
      mercadopago.configure({access_token: MERCADO_PAGO_TOKEN});

      const {query} = req

      let payment: any

      const topic = query.topic || query.type;
      
  
      if (topic == "payment") {

          const paymentId = query.id || query['data.id'];
          payment = await mercadopago.payment.findById(paymentId)
          
          const items = payment.body.additional_info.items
          const status = payment.body.status

          await crearOrden(status, items, <string>paymentId)
          
          res.status(200)
      }
      else
      {
        res.status(400)
      }

  })


  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}