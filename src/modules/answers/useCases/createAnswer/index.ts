import { AnswersRepository } from '../../repositories/implementations/AnswersRepository';
import { CreateAnswerController } from './CreateAnswerController';
import { CreateAnswerUseCase } from './CreateAnswerUseCase';

const answersRepository = AnswersRepository.getInstance();
const createAnswerUseCase = new CreateAnswerUseCase(answersRepository);
const createAnswerController = new CreateAnswerController(createAnswerUseCase);

export { createAnswerController };
