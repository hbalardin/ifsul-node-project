import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateRegisterUseCase } from './CreateRegisterUseCase';

class CreateRegisterController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createRegisterUseCase = container.resolve(CreateRegisterUseCase);

      const register = await createRegisterUseCase.execute();

      return response.json(register);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export { CreateRegisterController };
