import { Answer } from '../../model/Answer';
import { IAnswersRepository } from '../../repositories/IAnswersRepository';

interface IRequest {
  title: string;
  description?: string;
  questionId: string;
}

class CreateAnswerUseCase {
  constructor(private answersRepository: IAnswersRepository) {}

  execute({ title, description, questionId }: IRequest): Answer {
    const answer = this.answersRepository.create({
      title,
      description,
      questionId,
    });
    return answer;
  }
}

export { CreateAnswerUseCase };
