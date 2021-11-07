import { inject, injectable } from 'tsyringe';

import { Answer } from '../../entities/Answer';
import { IAnswersRepository } from '../../repositories/IAnswersRepository';

interface IRequest {
  id: string;
  title: string;
  description?: string;
  questionId: string;
}

@injectable()
class UpdateAnswerUseCase {
  constructor(
    @inject('AnswersRepository')
    private answersRepository: IAnswersRepository
  ) {}

  async execute({
    id,
    title,
    description,
    questionId,
  }: IRequest): Promise<Answer> {
    const answer = await this.answersRepository.update({
      id,
      title,
      description,
      questionId,
    });

    return answer;
  }
}

export { UpdateAnswerUseCase };
