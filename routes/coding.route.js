import express from "express";
import { getGFG, getLeetcode } from "../controller/coding.controller.js";

const codingRouter = express.Router();

codingRouter.get("/leetcode", getLeetcode);
codingRouter.get("/gfg", getGFG);

export default codingRouter;
