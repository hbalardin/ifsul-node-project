import { Step } from '../../model/Step';
import { IStepsRepository } from '../../repositories/IStepsRepository';

interface IRequest {
  registerId: string;
  questionId: string;
}

class CreateStepUseCase {
  constructor(private stepsRepository: IStepsRepository) {}

  execute({ registerId, questionId }: IRequest): Step {
    const step = this.stepsRepository.create({ registerId, questionId });
    return step;
  }
}

export { CreateStepUseCase };
