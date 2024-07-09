import express from 'express';
import Product from '../models/product.model.js';

const router = express.Router();

router.post('/create', async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(200).json(newProduct);
    } catch(error) {
        res.status(401).json({ message: error.message });
    }
});

export default router;
