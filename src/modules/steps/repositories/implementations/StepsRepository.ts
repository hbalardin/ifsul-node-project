import { Step } from '../../model/Step';
import { ICreateStepDTO, IStepsRepository } from '../IStepsRepository';

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
}

export { StepsRepository };
