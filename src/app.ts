require("dotenv").config()

import express from "express";
import config from "config";

const app = express()

app.use(express.json())
const port = config.get<number>("port")

import db from '../config/db'

import router from "./router";

app.use("/api/", router)

app.listen(port, async () => {
  await db();
  console.log('app run')
});