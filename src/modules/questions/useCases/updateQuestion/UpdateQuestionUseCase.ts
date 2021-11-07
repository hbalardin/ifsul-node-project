import { inject, injectable } from 'tsyringe';

import { Question } from '../../entities/Question';
import { IQuestionsRepository } from '../../repositories/IQuestionsRepository';

interface IRequest {
  id: string;
  title: string;
  linkedAnswerId?: string;
}

@injectable()
class UpdateQuestionUseCase {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository
  ) {}

  async execute({ id, title, linkedAnswerId }: IRequest): Promise<Question> {
    const Question = await this.questionsRepository.update({
      id,
      title,
      linkedAnswerId,
    });

    return Question;
  }
}

export { UpdateQuestionUseCase };
