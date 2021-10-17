import { Request, Response } from 'express';

import { CreateStepUseCase } from './CreateStepUseCase';

class CreateStepController {
  constructor(private createStepUseCase: CreateStepUseCase) {}

  handle(request: Request, response: Response): Response {
    const { registerId, questionId } = request.body;

    const step = this.createStepUseCase.execute({ registerId, questionId });

    return response.json(step);
  }
}

export { CreateStepController };
