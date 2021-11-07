import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateStepUseCase } from './UpdateStepUseCase';

class UpdateStepController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { answerId } = request.body;

      const updateStepUseCase = container.resolve(UpdateStepUseCase);

      const step = await updateStepUseCase.execute({ id, answerId });

      return response.json(step);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export { UpdateStepController };
