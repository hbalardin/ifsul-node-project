import { Router } from 'express';

import {
  createQuestionController,
  listAllQuestionsController,
} from '../modules/questions/useCases';

const questionsRoutes = Router();

questionsRoutes.get('/', (request, response) => {
  return listAllQuestionsController.handle(request, response);
});

questionsRoutes.post('/', (request, response) => {
  return createQuestionController.handle(request, response);
});

export { questionsRoutes };
