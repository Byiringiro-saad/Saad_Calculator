import express from "express";

//controllers
import { doMath } from "../controllers/math.controllers.js";

const router = express.Router();

router.post("/doMath", doMath);

export default router;
