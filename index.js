import express from 'express';
import mongoose from 'mongoose';
import getRouter from './routes/getProductsRoute.js';
import postRouter from './routes/postProductRoute.js';
import putRouter from './routes/putProductRoute.js';
import deleteRouter from './routes/deleteProductRoute.js';
import authRouter from './routes/authRouter.js';
import loginRouter from './routes/loginRouter.js'
import { verifyJWT } from './middleware/auth.middleware.js';

const app = express();
const PORT = process.env.PORT || 8080;
const uri = process.env.URI;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', verifyJWT, getRouter);
app.use('/api/products', verifyJWT, postRouter);
app.use('/api/products', verifyJWT, putRouter);
app.use('/api/products', verifyJWT, deleteRouter);
app.use('/api/auth', authRouter);
app.use('/api', loginRouter);


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