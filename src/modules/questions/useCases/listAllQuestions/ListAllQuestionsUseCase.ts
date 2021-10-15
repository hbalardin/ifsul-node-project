import { Question } from '../../model/Question';
import { IQuestionsRepository } from '../../repositories/IQuestionsRepository';

class ListAllQuestionsUseCase {
  constructor(private questionsRepository: IQuestionsRepository) {}

  execute(): Question[] {
    const questions = this.questionsRepository.listAll();
    return questions;
  }
}

export { ListAllQuestionsUseCase };
