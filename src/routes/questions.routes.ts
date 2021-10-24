import { Router } from 'express';

import {
  CreateQuestionController,
  listAllQuestionsController,
  createQuestionFromAnswerController,
} from '../modules/questions/useCases';

const questionsRoutes = Router();

const createQuestionController = new CreateQuestionController();

questionsRoutes.get('/', (request, response) => {
  return listAllQuestionsController.handle(request, response);
});

questionsRoutes.post('/', createQuestionController.handle);

questionsRoutes.post('/:linkedAnswerId', (request, response) => {
  return createQuestionFromAnswerController.handle(request, response);
});

export { questionsRoutes };
