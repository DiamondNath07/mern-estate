import express from "express";
import { inbox } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/inbox", inbox);
export default router;
