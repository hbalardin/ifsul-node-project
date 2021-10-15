import { Request, Response } from 'express';

import { ListAllAnswersUseCase } from './ListAllAnswersUseCase';

class ListAllAnswersController {
  constructor(private listAllAnswersUseCase: ListAllAnswersUseCase) {}

  handle(request: Request, response: Response): Response {
    const answers = this.listAllAnswersUseCase.execute();

    return response.json(answers);
  }
}

export { ListAllAnswersController };
