import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateStepUseCase } from './CreateStepUseCase';

class CreateStepController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { registerId, questionId } = request.body;

      const createStepUseCase = container.resolve(CreateStepUseCase);

      const step = await createStepUseCase.execute({ registerId, questionId });

      return response.json(step);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export { CreateStepController };
