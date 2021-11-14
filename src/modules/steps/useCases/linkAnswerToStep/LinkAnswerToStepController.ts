import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { LinkAnswerToStepUseCase } from './LinkAnswerToStepUseCase';

class LinkAnswerToStepController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, answerId } = request.params;

    const linkAnswerToStepUseCase = container.resolve(LinkAnswerToStepUseCase);

    const step = await linkAnswerToStepUseCase.execute({ id, answerId });

    return response.json(step);
  }
}

export { LinkAnswerToStepController };
