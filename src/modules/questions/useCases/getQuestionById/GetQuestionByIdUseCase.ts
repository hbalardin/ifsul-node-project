import { inject, injectable } from 'tsyringe';

import { Question } from '../../entities/Question';
import { IQuestionsRepository } from '../../repositories/IQuestionsRepository';

interface IRequest {
  id: string;
}

@injectable()
class GetQuestionByIdUseCase {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository
  ) {}

  async execute({ id }: IRequest): Promise<Question> {
    const question = await this.questionsRepository.findById({ id });
    return question;
  }
}

export { GetQuestionByIdUseCase };
