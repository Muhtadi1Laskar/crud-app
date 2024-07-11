import express from "express";
import { authController } from "../controllers/authControllers.js";

const router = express.Router();

router.post('/signup', authController);

export default router;