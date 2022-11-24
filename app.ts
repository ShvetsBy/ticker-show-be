
import fastify from "fastify";
import FinnhubAPI, { FinnhubWS } from '@stoqey/finnhub';

import cors from "@fastify/cors"

const server = fastify();
server.register(cors, {})
declare interface IQueryString {
  ticker: string;
}

server.get<{Querystring: IQueryString}>('/ticker', async (request) => {
  const { ticker } = request.query;
  const finnHubKey  = process.env.KEY;
  const finnhubAPI = new FinnhubAPI(finnHubKey);
  const quote = await finnhubAPI.getQuote(ticker);
  return quote;
})


server.get("/health", async (request, reply) => {
  return "OK\n";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
