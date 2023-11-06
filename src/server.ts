import fastify from "fastify";

const app = fastify();

app.get("/", async (req, res) => {
  return "Hello World";
});
