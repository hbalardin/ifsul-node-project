import { Router } from 'express';

// import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import {
  CreateQuestionController,
  CreateQuestionFromAnswerController,
  GetPreviousQuestionController,
  GetQuestionByIdController,
  ListAllQuestionsController,
  UpdateQuestionController,
} from '../modules/questions/useCases';

const questionsRoutes = Router();

const createQuestionController = new CreateQuestionController();
const createQuestionFromAnswerController =
  new CreateQuestionFromAnswerController();
const getQuestionByIdController = new GetQuestionByIdController();
const getPreviousQuestionController = new GetPreviousQuestionController();
const listAllQuestionsController = new ListAllQuestionsController();

const updateQuestionController = new UpdateQuestionController();

// questionsRoutes.use(ensureAuthenticated);
questionsRoutes.get('/', listAllQuestionsController.handle);

questionsRoutes.get('/:id', getQuestionByIdController.handle);

questionsRoutes.get(
  '/previous/:currentQuestionId',
  getPreviousQuestionController.handle
);

questionsRoutes.post('/', createQuestionController.handle);

questionsRoutes.post(
  '/:linkedAnswerId',
  createQuestionFromAnswerController.handle
);

questionsRoutes.put('/:id', updateQuestionController.handle);

export { questionsRoutes };
