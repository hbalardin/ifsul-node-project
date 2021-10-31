import { inject, injectable } from 'tsyringe';

import { Answer } from '../../entities/Answer';
import { IAnswersRepository } from '../../repositories/IAnswersRepository';

interface IRequest {
  title: string;
  description?: string;
  questionId: string;
}

@injectable()
class CreateAnswerUseCase {
  constructor(
    @inject('AnswersRepository')
    private answersRepository: IAnswersRepository
  ) {}

  async execute({ title, description, questionId }: IRequest): Promise<Answer> {
    const currentAnswers = await this.answersRepository.listByQuestion({
      questionId,
    });

    const answerAlreadyExists = currentAnswers.find(
      (answer) => answer.title === title
    );

    if (answerAlreadyExists)
      throw new Error('This question already has an answer with this title');

    const answer = await this.answersRepository.create({
      title,
      description,
      questionId,
    });

    return answer;
  }
}

export { CreateAnswerUseCase };
