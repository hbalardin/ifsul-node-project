import { Router } from 'express';

import {
  CreateAnswerController,
  ListAllAnswersController,
  listAnswersByQuestionController,
} from '../modules/answers/useCases';

const answersRoutes = Router();

const createAnswerController = new CreateAnswerController();
const listAllAnswersController = new ListAllAnswersController();

answersRoutes.get('/', listAllAnswersController.handle);
answersRoutes.get('/:questionId', (request, response) => {
  return listAnswersByQuestionController.handle(request, response);
});

answersRoutes.post('/', createAnswerController.handle);

export { answersRoutes };
