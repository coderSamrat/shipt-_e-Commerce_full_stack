import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors(
      {
            origin: '*',
            credentials: true,
      }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static('public/temp'));


// Product Routes
import uploadImageRoutes from './routes/uploadImageroutes.js';
import productRouter from './routes/productRoutes.js';
app.use('/api/v1/product/upload', uploadImageRoutes);
app.use('/api/v1/product', productRouter)

//Users Routes

import userRouter from './routes/userRoutes.js';
app.use('/api/v1/user', userRouter);
export default app;