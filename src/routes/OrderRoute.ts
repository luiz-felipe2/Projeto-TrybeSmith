import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const ordersRouter = Router();

ordersRouter.get('/', OrderController.list);

export default ordersRouter;