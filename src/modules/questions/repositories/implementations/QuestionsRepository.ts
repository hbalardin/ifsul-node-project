import { Question } from '../../model/Question';
import {
  ICreateQuestionDTO,
  IFindByLinkedAnswerDTO,
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

  create({ title, linkedAnswerId }: ICreateQuestionDTO): Question {
    const question = new Question();

    Object.assign(question, {
      title,
      linked_answer_id: linkedAnswerId,
      created_at: new Date(),
    });

    this.questions.push(question);

    return question;
  }

  findByLinkedAnswer({
    linkedAnswerId,
  }: IFindByLinkedAnswerDTO): Question | undefined {
    return this.questions.find(
      (question) => question.linked_answer_id === linkedAnswerId
    );
  }

  listAll(): Question[] {
    return this.questions;
  }
}

export { QuestionsRepository };
