import { inject, injectable } from 'tsyringe';

import { Question } from '../../entities/Question';
import { IQuestionsRepository } from '../../repositories/IQuestionsRepository';

interface IRequest {
  title: string;
}

@injectable()
class CreateQuestionUseCase {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository
  ) {}

  async execute({ title }: IRequest): Promise<Question> {
    const question = await this.questionsRepository.create({ title });
    return question;
  }
}

export { CreateQuestionUseCase };
