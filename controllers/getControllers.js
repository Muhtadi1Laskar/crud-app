import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}

export const getProduct = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({
            message: error.message
        });
    }
}