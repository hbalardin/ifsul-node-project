import { Router } from 'express';

import {
  CreateAnswerController,
  listAllAnswersController,
  listAnswersByQuestionController,
} from '../modules/answers/useCases';

const answersRoutes = Router();

const createAnswerController = new CreateAnswerController();

answersRoutes.get('/', (request, response) => {
  return listAllAnswersController.handle(request, response);
});
answersRoutes.get('/:questionId', (request, response) => {
  return listAnswersByQuestionController.handle(request, response);
});

answersRoutes.post('/', createAnswerController.handle);

export { answersRoutes };
