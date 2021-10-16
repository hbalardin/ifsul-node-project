import { Request, Response } from 'express';

import { UpdateStepUseCase } from './UpdateStepUseCase';

class UpdateStepController {
  constructor(private updateStepUseCase: UpdateStepUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { answerId } = request.body;

    const step = this.updateStepUseCase.execute({ id, answerId });

    return response.json(step);
  }
}

export { UpdateStepController };
