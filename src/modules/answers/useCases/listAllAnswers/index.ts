import { AnswersRepository } from '../../repositories/implementations/AnswersRepository';
import { ListAllAnswersController } from './ListAllAnswersController';
import { ListAllAnswersUseCase } from './ListAllAnswersUseCase';

const answersRepository = AnswersRepository.getInstance();
const listAllAnswersUseCase = new ListAllAnswersUseCase(answersRepository);
const listAllAnswersController = new ListAllAnswersController(
  listAllAnswersUseCase
);

export { listAllAnswersController };
