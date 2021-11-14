import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UndoStepUseCase } from './UndoStepUseCase';

class UndoStepController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const undoStepUseCase = container.resolve(UndoStepUseCase);

    const { previousStep } = await undoStepUseCase.execute({ id });

    return response.json({ previousStep });
  }
}

export { UndoStepController };
