import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { Step } from '../../entities/Step';
import { IStepsRepository } from '../../repositories/IStepsRepository';

interface IRequest {
  id: string;
}

interface IResponse {
  previousStep: Step;
}

@injectable()
class UndoStepUseCase {
  constructor(
    @inject('StepsRepository')
    private stepsRepository: IStepsRepository
  ) {}

  async execute({ id }: IRequest): Promise<IResponse> {
    const existentStep = await this.stepsRepository.findById({ id });
    if (!existentStep) throw new AppError('Step does not exists!');

    const previousStep = await this.stepsRepository.findPreviousStep({ id });
    const updatedPreviousStep = await this.stepsRepository.unlinkAnswer({
      id: previousStep.id,
    });

    await this.stepsRepository.delete({ id });

    return { previousStep: updatedPreviousStep };
  }
}

export { UndoStepUseCase };
