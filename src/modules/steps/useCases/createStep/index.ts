import { StepsRepository } from '../../repositories/implementations/StepsRepository';
import { CreateStepController } from './CreateStepController';
import { CreateStepUseCase } from './CreateStepUseCase';

const stepsRepository = StepsRepository.getInstance();
const createStepUseCase = new CreateStepUseCase(stepsRepository);
const createStepController = new CreateStepController(createStepUseCase);

export { createStepController };
