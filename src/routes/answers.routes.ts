import { Router } from 'express';

import {
  createAnswerController,
  listAllAnswersController,
  listAnswersByQuestionController,
} from '../modules/answers/useCases';

const answersRoutes = Router();

answersRoutes.get('/', (request, response) => {
  return listAllAnswersController.handle(request, response);
});
answersRoutes.get('/:questionId', (request, response) => {
  return listAnswersByQuestionController.handle(request, response);
});

answersRoutes.post('/', (request, response) => {
  return createAnswerController.handle(request, response);
});

export { answersRoutes };
