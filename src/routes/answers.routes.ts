import { Router } from 'express';

import {
  CreateAnswerController,
  ListAllAnswersController,
  ListAnswersByQuestionController,
} from '../modules/answers/useCases';

const answersRoutes = Router();

const createAnswerController = new CreateAnswerController();
const listAllAnswersController = new ListAllAnswersController();
const listAnswersByQuestionController = new ListAnswersByQuestionController();

answersRoutes.get('/', listAllAnswersController.handle);
answersRoutes.get('/:questionId', listAnswersByQuestionController.handle);

answersRoutes.post('/', createAnswerController.handle);

export { answersRoutes };
