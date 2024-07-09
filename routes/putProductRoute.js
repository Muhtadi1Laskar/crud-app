import express from "express";
import { updateProduct } from "../controllers/putController.js";

const router = express.Router();

router.put('/update/:id', updateProduct);

export default router;