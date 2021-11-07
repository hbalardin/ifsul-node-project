import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAnswerUseCase } from './CreateAnswerUseCase';

class CreateAnswerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { title, description, questionId } = request.body;

      const createAnswerUseCase = container.resolve(CreateAnswerUseCase);

      const answer = await createAnswerUseCase.execute({
        title,
        description,
        questionId,
      });

      return response.json(answer);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export { CreateAnswerController };
