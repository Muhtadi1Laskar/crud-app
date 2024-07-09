import express from 'express';
import mongoose from 'mongoose';
import Product from './models/product.model.js';

const app = express();
const PORT = process.env.PORT || 8080;
const uri = process.env.URI;

app.use(express.json());

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

mongoose.connect(uri)
    .then(() => {
        console.log("Connected to the Database");
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Error connecting to database:", error);
    });