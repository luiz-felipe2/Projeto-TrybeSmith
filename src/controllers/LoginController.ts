import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
import mapStatusHttp from '../utils/mapStatusHttp'; 

async function login(req: Request, res: Response) {
  const ServiceResponse = await LoginService.loginVerify(req.body);

  return res.status(mapStatusHttp(ServiceResponse.status)).json(ServiceResponse.data);
}

export default {
  login,
};