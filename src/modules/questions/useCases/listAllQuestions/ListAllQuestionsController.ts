import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllQuestionsUseCase } from './ListAllQuestionsUseCase';

class ListAllQuestionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listAllQuestionsUseCase = container.resolve(
        ListAllQuestionsUseCase
      );

      const questions = await listAllQuestionsUseCase.execute();

      return response.json(questions);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export { ListAllQuestionsController };
