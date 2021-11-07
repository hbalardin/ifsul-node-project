import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAnswerUseCase } from './UpdateAnswerUseCase';

class UpdateAnswerController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { title, description, questionId } = request.body;

      const createAnswerUseCase = container.resolve(UpdateAnswerUseCase);

      const answer = await createAnswerUseCase.execute({
        id,
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

export { UpdateAnswerController };
