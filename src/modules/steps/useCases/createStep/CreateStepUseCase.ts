import { inject, injectable } from 'tsyringe';

import { Step } from '../../entities/Step';
import { IStepsRepository } from '../../repositories/IStepsRepository';

interface IRequest {
  registerId: string;
  questionId: string;
}

@injectable()
class CreateStepUseCase {
  constructor(
    @inject('StepsRepository')
    private stepsRepository: IStepsRepository
  ) {}

  async execute({ registerId, questionId }: IRequest): Promise<Step> {
    const step = await this.stepsRepository.create({ registerId, questionId });
    return step;
  }
}

export { CreateStepUseCase };
