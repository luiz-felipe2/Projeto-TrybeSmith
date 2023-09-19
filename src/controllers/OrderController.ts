import { Request, Response } from 'express';
import mapStatusHttp from '../utils/mapStatusHttp';
import OrderService from '../services/OrderService';

const list = async (req: Request, res: Response) => {
  const serviceResponse = await OrderService.list();

  res.status(mapStatusHttp(serviceResponse.status)).json(serviceResponse.data);
};

export default {
  list,
};