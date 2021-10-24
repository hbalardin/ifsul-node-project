import { Router } from 'express';

import {
  CreateQuestionController,
  CreateQuestionFromAnswerController,
  listAllQuestionsController,
} from '../modules/questions/useCases';

const questionsRoutes = Router();

const createQuestionController = new CreateQuestionController();
const createQuestionFromAnswerController =
  new CreateQuestionFromAnswerController();

questionsRoutes.get('/', (request, response) => {
  return listAllQuestionsController.handle(request, response);
});

questionsRoutes.post('/', createQuestionController.handle);

questionsRoutes.post(
  '/:linkedAnswerId',
  createQuestionFromAnswerController.handle
);

export { questionsRoutes };
