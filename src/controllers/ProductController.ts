import { Request, Response } from 'express';
import ProductService from '../services/ProductService';
import mapStatusHttp from '../utils/mapStatusHttp';

const create = async (req: Request, res: Response): Promise<void> => {
  const { name, price, orderId } = req.body;
  const serviceResponse = await ProductService.create({ name, price, orderId });
  res.status(mapStatusHttp(serviceResponse.status)).json(serviceResponse.data);
};

const getProduct = async (req: Request, res: Response) => {
  const serviceResponse = await ProductService.getProduct();
  res.status(mapStatusHttp(serviceResponse.status)).json(serviceResponse.data);
};

export default {
  create,
  getProduct,
};