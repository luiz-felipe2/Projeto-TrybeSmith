import express from 'express';
import productsRouter from './routes/ProductRoute';
import ordersRouter from './routes/OrderRoute';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

export default app;
