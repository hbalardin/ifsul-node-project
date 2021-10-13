import { QuestionsRepository } from '../../repositories/implementations/QuestionsRepository';
import { CreateQuestionController } from './CreateQuestionController';
import { CreateQuestionUseCase } from './createQuestionUseCase';

const questionsRepository = QuestionsRepository.getInstance();
const createQuestionUseCase = new CreateQuestionUseCase(questionsRepository);
const createQuestionController = new CreateQuestionController(
  createQuestionUseCase
);

export { createQuestionController };
