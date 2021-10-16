import { Request, Response } from 'express';

import { CreateRegisterUseCase } from './CreateRegisterUseCase';

class CreateRegisterController {
  constructor(private createRegisterUseCase: CreateRegisterUseCase) {}

  handle(request: Request, response: Response): Response {
    const register = this.createRegisterUseCase.execute();

    return response.json(register);
  }
}

export { CreateRegisterController };
