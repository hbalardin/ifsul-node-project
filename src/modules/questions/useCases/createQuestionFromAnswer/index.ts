import { QuestionsRepository } from '../../repositories/implementations/QuestionsRepository';
import { CreateQuestionFromAnswerController } from './CreateQuestionFromAnswerController';
import { CreateQuestionFromAnswerUseCase } from './CreateQuestionFromAnswerUseCase';

const questionsRepository = QuestionsRepository.getInstance();
const createQuestionFromAnswerUseCase = new CreateQuestionFromAnswerUseCase(
  questionsRepository
);
const createQuestionFromAnswerController =
  new CreateQuestionFromAnswerController(createQuestionFromAnswerUseCase);

export { createQuestionFromAnswerController };
