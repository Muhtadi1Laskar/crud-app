import express from 'express';
import mongoose from 'mongoose';
import getRouter from './routes/getProductsRoute.js';
import postRouter from './routes/postProductRoute.js';
import putRouter from './routes/putProductRoute.js';
import deleteRouter from './routes/deleteProductRoute.js';

const app = express();
const PORT = process.env.PORT || 8080;
const uri = process.env.URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', getRouter);
app.use('/api/products', postRouter);
app.use('/api/products', putRouter);
app.use('/api/products', deleteRouter);


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