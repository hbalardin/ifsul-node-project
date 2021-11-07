import { Router } from 'express';

import {
  CreateAnswerController,
  ListAllAnswersController,
  ListAnswersByQuestionController,
  UpdateAnswerController,
} from '../modules/answers/useCases';

const answersRoutes = Router();

const createAnswerController = new CreateAnswerController();
const listAllAnswersController = new ListAllAnswersController();
const listAnswersByQuestionController = new ListAnswersByQuestionController();
const updateAnswerController = new UpdateAnswerController();

answersRoutes.get('/', listAllAnswersController.handle);
answersRoutes.get('/:questionId', listAnswersByQuestionController.handle);

answersRoutes.post('/', createAnswerController.handle);

answersRoutes.put('/:id', updateAnswerController.handle);

export { answersRoutes };
