import { AnswersRepository } from '../../repositories/implementations/AnswersRepository';
import { ListAnswersByQuestionController } from './ListAnswersByQuestionController';
import { ListAnswersByQuestionUseCase } from './ListAnswersByQuestionUseCase';

const answersRepository = AnswersRepository.getInstance();
const listAnswersByQuestionUseCase = new ListAnswersByQuestionUseCase(
  answersRepository
);
const listAnswersByQuestionController = new ListAnswersByQuestionController(
  listAnswersByQuestionUseCase
);

export { listAnswersByQuestionController };
