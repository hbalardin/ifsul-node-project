import { Router } from 'express';

import {
  CreateQuestionController,
  CreateQuestionFromAnswerController,
  ListAllQuestionsController,
  UpdateQuestionController,
} from '../modules/questions/useCases';

const questionsRoutes = Router();

const createQuestionController = new CreateQuestionController();
const createQuestionFromAnswerController =
  new CreateQuestionFromAnswerController();
const listAllQuestionsController = new ListAllQuestionsController();

const updateQuestionController = new UpdateQuestionController();

questionsRoutes.get('/', listAllQuestionsController.handle);

questionsRoutes.post('/', createQuestionController.handle);

questionsRoutes.post(
  '/:linkedAnswerId',
  createQuestionFromAnswerController.handle
);

questionsRoutes.put('/:id', updateQuestionController.handle);

export { questionsRoutes };
