require("dotenv").config()

import express from "express";
import config from "config";

const app = express()

app.use(express.json())
const port = config.get<number>("port")

import db from '../config/db'

import router from "./router";

import Logger from "../config/logger";

app.use("/api/", router)

app.listen(port, async () => {
  await db();
  Logger.info('app run')
});