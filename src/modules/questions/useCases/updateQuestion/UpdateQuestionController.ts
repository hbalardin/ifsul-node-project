import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateQuestionUseCase } from './UpdateQuestionUseCase';

class UpdateQuestionController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const { title, linkedAnswerId } = request.body;

      const updateQuestionUseCase = container.resolve(UpdateQuestionUseCase);

      const question = await updateQuestionUseCase.execute({
        id,
        title,
        linkedAnswerId,
      });

      return response.json(question);
    } catch (error) {
      return response.status(500).json(error);
    }
  }
}

export { UpdateQuestionController };
