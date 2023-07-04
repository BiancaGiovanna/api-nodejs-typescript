import express from "express";
import config from "config";

const app = express()

app.use(express.json())
const port = config.get<number>("port")

import router from "./router";

app.use("/api/", router)

app.listen(port, async () => {
  console.log(`Aplicação rodando na porta: ${port}`)
});