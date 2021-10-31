import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAnswersByQuestionUseCase } from './ListAnswersByQuestionUseCase';

class ListAnswersByQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { questionId } = request.params;

    const listAnswersByQuestionUseCase = container.resolve(
      ListAnswersByQuestionUseCase
    );

    const answers = await listAnswersByQuestionUseCase.execute({ questionId });

    return response.json(answers);
  }
}

export { ListAnswersByQuestionController };
