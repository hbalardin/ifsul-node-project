import { Answer } from '../../model/Answer';
import { ICreateAnswerDTO, IAnswersRepository } from '../IAnswersRepository';

class AnswersRepository implements IAnswersRepository {
  private answers: Answer[];

  private static INSTANCE: AnswersRepository;

  private constructor() {
    this.answers = [];
  }

  public static getInstance(): AnswersRepository {
    if (!AnswersRepository.INSTANCE) {
      this.INSTANCE = new AnswersRepository();
    }

    return this.INSTANCE;
  }

  create({ title, description, questionId }: ICreateAnswerDTO): Answer {
    const answer = new Answer();

    Object.assign(answer, {
      title,
      description,
      created_at: new Date(),
      question_id: questionId,
    });

    this.answers.push(answer);

    return answer;
  }

  listAll(): Answer[] {
    return this.answers;
  }

  listByQuestion(questionId: string): Answer[] {
    return this.answers.filter((answer) => answer.question_id === questionId);
  }
}

export { AnswersRepository };
