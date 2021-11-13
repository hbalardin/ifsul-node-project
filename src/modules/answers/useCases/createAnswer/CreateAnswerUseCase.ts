import { inject, injectable } from 'tsyringe';

import { Answer } from '../../entities/Answer';
import { IAnswersRepository } from '../../repositories/IAnswersRepository';

interface IRequest {
  title: string;
  description?: string;
  questionId: string;
}

@injectable()
class CreateAnswerUseCase {
  constructor(
    @inject('AnswersRepository')
    private answersRepository: IAnswersRepository
  ) {}

  async execute({ title, description, questionId }: IRequest): Promise<Answer> {
    const answer = await this.answersRepository.create({
      title,
      description,
      questionId,
    });

    return answer;
  }
}

export { CreateAnswerUseCase };
