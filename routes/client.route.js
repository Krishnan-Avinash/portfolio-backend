import express from "express";
import { addClient } from "../controller/client.controller.js";

const clientRouter = express.Router();

clientRouter.post("/add", addClient);

export { clientRouter };
