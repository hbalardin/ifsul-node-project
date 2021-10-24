import { getRepository, Repository } from 'typeorm';

import { Step } from '../../entities/Step';
import {
  ICreateStepDTO,
  IFindByIdDTO,
  IStepsRepository,
  IUpdateStepDTO,
} from '../IStepsRepository';

class StepsRepository implements IStepsRepository {
  private repository: Repository<Step>;

  constructor() {
    this.repository = getRepository(Step);
  }

  async create({ registerId, questionId }: ICreateStepDTO): Promise<Step> {
    const step = this.repository.create({
      register_id: registerId,
      question_id: questionId,
    });

    await this.repository.save(step);

    return step;
  }

  async findById({ id }: IFindByIdDTO): Promise<Step | undefined> {
    const step = await this.repository.findOne({ id });
    return step;
  }

  async listAll(): Promise<Step[]> {
    const steps = await this.repository.find();
    return steps;
  }

  async update({ id, answerId, nextStepId }: IUpdateStepDTO): Promise<Step> {
    const step = await this.findById({ id });

    const updatedStep = await this.repository.save({
      ...step,
      answer_id: answerId,
      next_step_id: nextStepId,
    });

    return updatedStep;
  }
}

export { StepsRepository };
