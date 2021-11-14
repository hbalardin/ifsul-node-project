import { getRepository, Repository } from 'typeorm';

import { Step } from '../../entities/Step';
import {
  ICreateStepDTO,
  IDeleteDTO,
  IFindByIdDTO,
  IFindPreviousStepDTO,
  IStepsRepository,
  ILinkAnswerStepDTO,
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

  async delete({ id }: IDeleteDTO): Promise<void> {
    await this.repository.delete(id);
  }

  async findById({ id }: IFindByIdDTO): Promise<Step | undefined> {
    const step = await this.repository.findOne({ id });
    return step;
  }

  async findPreviousStep({ id }: IFindPreviousStepDTO): Promise<Step> {
    const step = await this.repository.findOne({ next_step_id: id });
    return step;
  }

  async listAll(): Promise<Step[]> {
    const steps = await this.repository.find();
    return steps;
  }

  async linkAnswer({
    id,
    answerId,
    nextStepId,
  }: ILinkAnswerStepDTO): Promise<Step> {
    const step = await this.findById({ id });

    const updatedStep = await this.repository.save({
      ...step,
      answer_id: answerId,
      next_step_id: nextStepId,
    });

    return updatedStep;
  }

  async unlinkAnswer({ id }: ILinkAnswerStepDTO): Promise<Step> {
    const step = await this.findById({ id });

    const updatedStep = await this.repository.save({
      ...step,
      answer_id: undefined,
      next_step_id: undefined,
    });

    return updatedStep;
  }
}

export { StepsRepository };
