import { Answer } from '../../model/Answer';
import { IAnswersRepository } from '../../repositories/IAnswersRepository';

class ListAnswersByQuestionUseCase {
  constructor(private answersRepository: IAnswersRepository) {}

  execute(questionId: string): Answer[] {
    const answers = this.answersRepository.listByQuestion(questionId);
    return answers;
  }
}

export { ListAnswersByQuestionUseCase };
