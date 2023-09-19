import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const productsRouter = Router();

productsRouter.post('/', ProductController.create);
productsRouter.get('/', ProductController.getProduct);

export default productsRouter;