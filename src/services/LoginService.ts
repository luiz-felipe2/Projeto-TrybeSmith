import bcrypt from 'bcryptjs';
import jwt from '../utils/jwt';
import { ServiceResponse } from '../types/ServiceResponse';
import { Login } from '../types/Login';
import { Token } from '../types/Token';
import ValidateLogin from '../validations/ValidateLogin';
import UserModel from '../database/models/user.model';

async function loginVerify(login: Login): Promise<ServiceResponse<Token>> {
  const error = ValidateLogin(login);
  if (error) return error;

  const searchUser = await UserModel.findOne({ where: { username: login.username } });
  if (!searchUser || !bcrypt.compareSync(login.password, searchUser.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const { id, username } = searchUser.dataValues;
  const token = jwt.sign({ id, username });
  return { status: 'SUCCESSFUL', data: { token } };
}

export default { 
  loginVerify,
};
