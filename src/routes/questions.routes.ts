import { Router } from 'express';

import {
  CreateQuestionController,
  CreateQuestionFromAnswerController,
  ListAllQuestionsController,
} from '../modules/questions/useCases';

const questionsRoutes = Router();

const createQuestionController = new CreateQuestionController();
const createQuestionFromAnswerController =
  new CreateQuestionFromAnswerController();
const listAllQuestionsController = new ListAllQuestionsController();

questionsRoutes.get('/', listAllQuestionsController.handle);

questionsRoutes.post('/', createQuestionController.handle);

questionsRoutes.post(
  '/:linkedAnswerId',
  createQuestionFromAnswerController.handle
);

export { questionsRoutes };
