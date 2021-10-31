import { Repository, getRepository } from 'typeorm';

import { Question } from '../../entities/Question';
import {
  ICreateQuestionDTO,
  IFindByLinkedAnswerDTO,
  IQuestionsRepository,
} from '../IQuestionsRepository';

class QuestionsRepository implements IQuestionsRepository {
  private repository: Repository<Question>;

  constructor() {
    this.repository = getRepository(Question);
  }

  async create({
    title,
    linkedAnswerId,
  }: ICreateQuestionDTO): Promise<Question> {
    const question = this.repository.create({
      title,
      linked_answer_id: linkedAnswerId,
    });

    await this.repository.save(question);

    return question;
  }

  async findByLinkedAnswer({
    linkedAnswerId,
  }: IFindByLinkedAnswerDTO): Promise<Question | undefined> {
    const question = await this.repository.findOne({
      linked_answer_id: linkedAnswerId,
    });

    return question;
  }

  async listAll(): Promise<Question[]> {
    const questions = await this.repository.find();
    return questions;
  }
}

export { QuestionsRepository };
