import { Router } from 'express';

import {
  createAnswerController,
  listAllAnswersController,
} from '../modules/answers/useCases';

const answersRoutes = Router();

answersRoutes.get('/', (request, response) => {
  return listAllAnswersController.handle(request, response);
});

answersRoutes.post('/', (request, response) => {
  return createAnswerController.handle(request, response);
});

export { answersRoutes };
