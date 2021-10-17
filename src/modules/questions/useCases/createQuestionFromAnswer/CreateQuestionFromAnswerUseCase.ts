import { Question } from '../../model/Question';
import { IQuestionsRepository } from '../../repositories/IQuestionsRepository';

interface IRequest {
  linkedAnswerId: string;
  title: string;
}

class CreateQuestionFromAnswerUseCase {
  constructor(private questionsRepository: IQuestionsRepository) {}

  execute({ linkedAnswerId, title }: IRequest): Question {
    const hasQuestionLinkedToAnswer =
      !!this.questionsRepository.findByLinkedAnswer({ linkedAnswerId });

    if (hasQuestionLinkedToAnswer)
      throw new Error('Already exists a question linked to this answer');

    const question = this.questionsRepository.create({ linkedAnswerId, title });
    return question;
  }
}

export { CreateQuestionFromAnswerUseCase };
