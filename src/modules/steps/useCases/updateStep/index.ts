import { AnswersRepository } from '../../../answers/repositories/implementations/AnswersRepository';
import { QuestionsRepository } from '../../../questions/repositories/implementations/QuestionsRepository';
import { StepsRepository } from '../../repositories/implementations/StepsRepository';
import { UpdateStepController } from './UpdateStepController';
import { UpdateStepUseCase } from './UpdateStepUseCase';

const stepsRepository = StepsRepository.getInstance();
const answersRepository = AnswersRepository.getInstance();
const questionsRepository = QuestionsRepository.getInstance();
const updateStepUseCase = new UpdateStepUseCase(
  stepsRepository,
  answersRepository,
  questionsRepository
);
const updateStepController = new UpdateStepController(updateStepUseCase);

export { updateStepController };
