import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateQuestionUseCase } from './CreateQuestionUseCase';

class CreateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { title } = request.body;

      const createQuestionUseCase = container.resolve(CreateQuestionUseCase);

      const question = await createQuestionUseCase.execute({ title });

      return response.json(question);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export { CreateQuestionController };
