import { createServer } from "http";
import app from "./app";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import { syncDb } from "./models/sqliteDb";

dotenv.config();
const PORT = 5001;
// const DB_URL = process.env.DB_URL;

const server = createServer(app);

server.listen(PORT, async () => {
  // const db = await mongoose.connect(DB_URL as string);
  // if (db) {
  //   console.log("db connected");
  // }
  await syncDb();
  console.log("server running on port ", PORT);
});


