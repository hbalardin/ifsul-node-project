import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { AppError } from '../errors/AppError';
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

  if (!authHeader) throw new AppError("Token's missing!", 401);

  const [, token] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(
      token,
      '31057cbc297f0b190a7f214ed13f0d6a'
    ) as IPayload;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById({ id: userId });

    if (!user) throw new AppError('User does not exists!', 401);

    next();
  } catch (error) {
    throw new AppError('Invalid token', 401);
  }
};
