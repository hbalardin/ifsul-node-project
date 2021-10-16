import { AnswersRepository } from '../../../answers/repositories/implementations/AnswersRepository';
import { QuestionsRepository } from '../../../questions/repositories/implementations/QuestionsRepository';
import { RegistersRepository } from '../../../registers/repositories/implementations/RegistersRepository';
import { StepsRepository } from '../../../steps/repositories/implementations/StepsRepository';
import { GetMockController } from './GetMockController';
import { GetMockUseCase } from './GetMockUseCase';

const answersRepository = AnswersRepository.getInstance();
const questionsRepository = QuestionsRepository.getInstance();
const registersRepository = RegistersRepository.getInstance();
const stepsRepository = StepsRepository.getInstance();

const getMockUseCase = new GetMockUseCase(
  answersRepository,
  questionsRepository,
  registersRepository,
  stepsRepository
);
const getMockController = new GetMockController(getMockUseCase);

export { getMockController };
