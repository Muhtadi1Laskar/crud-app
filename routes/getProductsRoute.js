import express from 'express';
import Product from '../models/product.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
});

export default router;