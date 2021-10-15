import { Question } from '../../model/Question';
import { IQuestionsRepository } from '../../repositories/IQuestionsRepository';

interface IRequest {
  title: string;
}

class CreateQuestionUseCase {
  constructor(private questionsRepository: IQuestionsRepository) {}

  execute({ title }: IRequest): Question {
    const question = this.questionsRepository.create({ title });
    return question;
  }
}

export { CreateQuestionUseCase };
