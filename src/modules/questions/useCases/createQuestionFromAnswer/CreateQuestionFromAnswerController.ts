import { Request, Response } from 'express';

import { CreateQuestionFromAnswerUseCase } from './CreateQuestionFromAnswerUseCase';

class CreateQuestionFromAnswerController {
  constructor(
    private createQuestionFromAnswerUseCase: CreateQuestionFromAnswerUseCase
  ) {}

  handle(request: Request, response: Response): Response {
    const { linkedAnswerId } = request.params;
    const { title } = request.body;

    const question = this.createQuestionFromAnswerUseCase.execute({
      linkedAnswerId,
      title,
    });

    return response.json(question);
  }
}

export { CreateQuestionFromAnswerController };
