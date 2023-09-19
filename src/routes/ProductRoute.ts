import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productsRouter = Router();

productsRouter.post('/', ProductController.create);

export default productsRouter;