import { inject, injectable } from 'tsyringe';

import { Question } from '../../entities/Question';
import { IQuestionsRepository } from '../../repositories/IQuestionsRepository';

@injectable()
class ListAllQuestionsUseCase {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository
  ) {}

  async execute(): Promise<Question[]> {
    const questions = await this.questionsRepository.listAll();
    return questions;
  }
}

export { ListAllQuestionsUseCase };
