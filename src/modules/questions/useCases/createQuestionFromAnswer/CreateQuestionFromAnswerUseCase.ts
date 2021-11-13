import { inject, injectable } from 'tsyringe';

import { IAnswersRepository } from '../../../answers/repositories/IAnswersRepository';
import { Question } from '../../entities/Question';
import { IQuestionsRepository } from '../../repositories/IQuestionsRepository';

interface IRequest {
  linkedAnswerId: string;
  title: string;
}

@injectable()
class CreateQuestionFromAnswerUseCase {
  constructor(
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository,
    @inject('AnswersRepository')
    private answersRepository: IAnswersRepository
  ) {}

  async execute({ linkedAnswerId, title }: IRequest): Promise<Question> {
    const hasQuestionLinkedToAnswer =
      await this.questionsRepository.findByLinkedAnswer({ linkedAnswerId });

    if (hasQuestionLinkedToAnswer)
      throw new Error('Already exists a question linked to this answer');

    const question = await this.questionsRepository.create({
      linkedAnswerId,
      title,
    });

    await this.answersRepository.linkQuestion({
      id: linkedAnswerId,
      questionId: question.id,
    });

    return question;
  }
}

export { CreateQuestionFromAnswerUseCase };
