import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllQuestionsUseCase } from './ListAllQuestionsUseCase';

class ListAllQuestionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllQuestionsUseCase = container.resolve(ListAllQuestionsUseCase);

    const questions = await listAllQuestionsUseCase.execute();

    return response.json(questions);
  }
}

export { ListAllQuestionsController };
