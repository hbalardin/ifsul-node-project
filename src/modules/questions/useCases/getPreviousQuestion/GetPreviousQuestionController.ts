import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetPreviousQuestionUseCase } from './GetPreviousQuestionUseCase';

class GetPreviousQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { currentQuestionId } = request.params;

    const getPreviousQuestionUseCase = container.resolve(
      GetPreviousQuestionUseCase
    );

    const previousQuestion = await getPreviousQuestionUseCase.execute({
      currentQuestionId,
    });

    return response.json(previousQuestion);
  }
}

export { GetPreviousQuestionController };
