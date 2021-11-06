import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllAnswersUseCase } from './ListAllAnswersUseCase';

class ListAllAnswersController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const listAllAnswersUseCase = container.resolve(ListAllAnswersUseCase);

      const answers = await listAllAnswersUseCase.execute();

      return response.json(answers);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export { ListAllAnswersController };
