import { Request, Response } from 'express';

import { ListAllQuestionsUseCase } from './ListAllQuestionsUseCase';

class ListAllQuestionsController {
  constructor(private listAllQuestionsUseCase: ListAllQuestionsUseCase) {}

  handle(request: Request, response: Response): Response {
    const questions = this.listAllQuestionsUseCase.execute();

    return response.json(questions);
  }
}

export { ListAllQuestionsController };
