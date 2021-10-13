import { Request, Response } from 'express';

import { CreateQuestionUseCase } from './createQuestionUseCase';

class CreateQuestionController {
  constructor(private createQuestionUseCase: CreateQuestionUseCase) {}

  handle(request: Request, response: Response): Response {
    const { title } = request.body;

    const question = this.createQuestionUseCase.execute({ title });

    return response.json(question);
  }
}

export { CreateQuestionController };
