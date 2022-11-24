import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import cors from 'cors';
import { schema } from './schema/schema';

const server = express();

server.use(cors());
server.use(express.json());

server.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
}));


export default server;
