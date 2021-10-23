import { Step } from '../../model/Step';
import {
  ICreateStepDTO,
  IFindByIdDTO,
  IStepsRepository,
  IUpdateStepDTO,
} from '../IStepsRepository';

class StepsRepository implements IStepsRepository {
  private steps: Step[];

  private static INSTANCE: StepsRepository;

  private constructor() {
    this.steps = [];
  }

  public static getInstance(): StepsRepository {
    if (!StepsRepository.INSTANCE) {
      this.INSTANCE = new StepsRepository();
    }

    return this.INSTANCE;
  }

  create({ registerId, questionId }: ICreateStepDTO): Step {
    const step = new Step();

    Object.assign(step, {
      register_id: registerId,
      question_id: questionId,
      created_at: new Date(),
    });

    this.steps.push(step);

    return step;
  }

  findById({ id }: IFindByIdDTO): Step | undefined {
    return this.steps.find((step) => step.id === id);
  }

  listAll(): Step[] {
    return this.steps;
  }

  update({ id, answerId, nextStepId }: IUpdateStepDTO): Step {
    const step = this.findById({ id });

    Object.assign(step, {
      answer_id: answerId,
      next_step_id: nextStepId,
      updated_at: new Date(),
    });

    return step;
  }
}

export { StepsRepository };
