import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import { clientRouter } from "./routes/client.route.js";
import codingRouter from "./routes/coding.route.js";

const app = express();

app.use(express.json());
app.use(cors());
console.log(process.env.PORT);

connectDb();
app.use("/api/portfolio", clientRouter);
app.use("/api/codingProfile", codingRouter);

app.listen(process.env.PORT, () => {
  console.log("App is listening on port: ", process.env.PORT);
});
