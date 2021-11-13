import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new Error("Token's missing!");

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(
      token,
      '31057cbc297f0b190a7f214ed13f0d6a'
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById({ id: userId });

    if (!user) throw new Error('User does not exists!');

    next();
  } catch (error) {
    throw new Error('Invalid token');
  }
};
