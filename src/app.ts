import express from 'express';
import productsRouter from './routes/ProductRoute';
import ordersRouter from './routes/OrderRoute';
import loginRouter from './routes/LoginRoute';

const app = express();

app.use(express.json());
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/login', loginRouter);

export default app;
