import { Request, Response } from 'express';

import { CreateAnswerUseCase } from './CreateAnswerUseCase';

class CreateAnswerController {
  constructor(private createAnswerUseCase: CreateAnswerUseCase) {}

  handle(request: Request, response: Response): Response {
    const { title, description, questionId } = request.body;

    const answer = this.createAnswerUseCase.execute({
      title,
      description,
      questionId,
    });

    return response.json(answer);
  }
}

export { CreateAnswerController };
