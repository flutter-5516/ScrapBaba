import express from "express";
import { createScrap, getScrapsByLocation } from "../controllers/scrapController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateUser, createScrap);
router.post("/get", getScrapsByLocation);

export default router;
