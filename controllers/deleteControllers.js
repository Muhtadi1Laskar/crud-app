import Product from "../models/product.model.js";

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch(error) {
        res.status(404).json({ message: error.message });
    }
}