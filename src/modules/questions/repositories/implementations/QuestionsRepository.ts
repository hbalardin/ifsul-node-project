import { Question } from '../../model/Question';
import {
  ICreateQuestionDTO,
  IQuestionsRepository,
} from '../IQuestionsRepository';

class QuestionsRepository implements IQuestionsRepository {
  private questions: Question[];

  private static INSTANCE: QuestionsRepository;

  private constructor() {
    this.questions = [];
  }

  public static getInstance(): QuestionsRepository {
    if (!QuestionsRepository.INSTANCE) {
      this.INSTANCE = new QuestionsRepository();
    }

    return this.INSTANCE;
  }

  create({ title }: ICreateQuestionDTO): Question {
    const question = new Question();

    Object.assign(question, {
      title,
      created_at: new Date(),
    });

    this.questions.push(question);

    return question;
  }

  listAll(): Question[] {
    return this.questions;
  }
}

export { QuestionsRepository };
