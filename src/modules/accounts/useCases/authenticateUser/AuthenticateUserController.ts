import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';

class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { username, password } = request.body;

      const authenticateUserUseCase = container.resolve(
        AuthenticateUserUseCase
      );

      const token = await authenticateUserUseCase.execute({
        username,
        password,
      });

      return response.json(token);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export { AuthenticateUserController };
