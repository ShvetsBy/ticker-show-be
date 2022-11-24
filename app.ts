import fastify from "fastify";

const server = fastify();

declare interface IQueryString {
  ticker: string;
}

server.get<{Querystring: IQueryString}>('/ticker', async (request) => {
  const { ticker } = request.query;
  
  return ticker;
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
