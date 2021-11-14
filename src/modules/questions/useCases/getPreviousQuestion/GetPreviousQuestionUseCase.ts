import { inject, injectable } from 'tsyringe';

import { IAnswersRepository } from '../../../answers/repositories/IAnswersRepository';
import { Question } from '../../entities/Question';
import { IQuestionsRepository } from '../../repositories/IQuestionsRepository';

interface IRequest {
  currentQuestionId: string;
}

@injectable()
class GetPreviousQuestionUseCase {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
    @inject('AnswersRepository')
    private answersRepository: IAnswersRepository
  ) {}

  async execute({ currentQuestionId }: IRequest): Promise<Question> {
    const currentQuestion = await this.questionsRepository.findById({
      id: currentQuestionId,
    });

    const linkedAnswer = await this.answersRepository.findById({
      id: currentQuestion.linked_answer_id,
    });

    const previousQuestion = await this.questionsRepository.findById({
      id: linkedAnswer.question_id,
    });

    return previousQuestion;
  }
}

export { GetPreviousQuestionUseCase };
