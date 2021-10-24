import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateQuestionFromAnswerUseCase } from './CreateQuestionFromAnswerUseCase';

class CreateQuestionFromAnswerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { linkedAnswerId } = request.params;
    const { title } = request.body;

    const createQuestionFromAnswerUseCase = container.resolve(
      CreateQuestionFromAnswerUseCase
    );

    const question = await createQuestionFromAnswerUseCase.execute({
      linkedAnswerId,
      title,
    });

    return response.json(question);
  }
}

export { CreateQuestionFromAnswerController };
