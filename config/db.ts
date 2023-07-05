import mongoose from "mongoose";
import config from 'config';
import Logger from "./logger";

async function connect() {
  const dbUri = config.get<string>('dbUri')

  try {
    await mongoose.connect(dbUri)
  } catch (error) {
    Logger.error("Não foi possivel a conexão")
    Logger.error(`Error: ${error}`)
  }
}

export default connect