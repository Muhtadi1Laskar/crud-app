import express from 'express';
import { deleteProduct } from '../controllers/deleteControllers.js';


const router = express.Router();

router.delete('/delete/:id', deleteProduct);

export default router;