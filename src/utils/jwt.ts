import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

type PayloadToken = {
  id: number,
  username: string,
};

function sign(payload: PayloadToken): string {
  const token = jwt.sign(payload, secret);
  return token;
}

export default {
  sign,
};