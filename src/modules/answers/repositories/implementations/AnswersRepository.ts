import { getRepository, Repository } from 'typeorm';

import { Answer } from '../../entities/Answer';
import {
  ICreateAnswerDTO,
  IAnswersRepository,
  IFindByIdDTO,
  IListByQuestionDTO,
  IUpdateAnswerDTO,
} from '../IAnswersRepository';

class AnswersRepository implements IAnswersRepository {
  private repository: Repository<Answer>;

  constructor() {
    this.repository = getRepository(Answer);
  }

  async create({
    title,
    description,
    questionId,
  }: ICreateAnswerDTO): Promise<Answer> {
    const answer = this.repository.create({
      title,
      description,
      question_id: questionId,
    });

    await this.repository.save(answer);

    return answer;
  }

  async findById({ id }: IFindByIdDTO): Promise<Answer | undefined> {
    const answer = await this.repository.findOne({ id });

    return answer;
  }

  async listAll(): Promise<Answer[]> {
    const answers = await this.repository.find();
    return answers;
  }

  async listByQuestion({ questionId }: IListByQuestionDTO): Promise<Answer[]> {
    const answers = await this.repository.find({ question_id: questionId });
    return answers;
  }

  async update({
    id,
    title,
    description,
    questionId,
  }: IUpdateAnswerDTO): Promise<Answer> {
    const answer = await this.repository.save({
      id,
      title,
      description,
      questionId,
    });

    return answer;
  }
}

export { AnswersRepository };
