import { Request, Response } from 'express';

import { ListAnswersByQuestionUseCase } from './ListAnswersByQuestionUseCase';

class ListAnswersByQuestionController {
  constructor(
    private listAnswersByQuestionUseCase: ListAnswersByQuestionUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const { questionId } = request.params;

    const answers = this.listAnswersByQuestionUseCase.execute(questionId);

    return response.json(answers);
  }
}

export { ListAnswersByQuestionController };
