import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { GetQuestionByIdUseCase } from './GetQuestionByIdUseCase';

class GetQuestionByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      const getQuestionByIdUseCase = container.resolve(GetQuestionByIdUseCase);

      const questions = await getQuestionByIdUseCase.execute({ id });

      return response.json(questions);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export { GetQuestionByIdController };
