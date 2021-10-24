import { inject, injectable } from 'tsyringe';

import { Answer } from '../../entities/Answer';
import { IAnswersRepository } from '../../repositories/IAnswersRepository';

interface IRequest {
  questionId: string;
}

@injectable()
class ListAnswersByQuestionUseCase {
  constructor(
    @inject('AnswersRepository')
    private answersRepository: IAnswersRepository
  ) {}

  async execute({ questionId }: IRequest): Promise<Answer[]> {
    const answers = await this.answersRepository.listByQuestion({ questionId });
    return answers;
  }
}

export { ListAnswersByQuestionUseCase };
