import { QuestionsRepository } from '../../repositories/implementations/QuestionsRepository';
import { ListAllQuestionsController } from './ListAllQuestionsController';
import { ListAllQuestionsUseCase } from './ListAllQuestionsUseCase';

const questionsRepository = QuestionsRepository.getInstance();
const listAllQuestionsUseCase = new ListAllQuestionsUseCase(
  questionsRepository
);
const listAllQuestionsController = new ListAllQuestionsController(
  listAllQuestionsUseCase
);

export { listAllQuestionsController };
