import { Router } from 'express';

import {
  CreateStepController,
  LinkAnswerToStepController,
  UndoStepController,
} from '../modules/steps/useCases';

const stepsRoutes = Router();

const createStepController = new CreateStepController();
const linkAnswerToStepController = new LinkAnswerToStepController();
const undoStepController = new UndoStepController();

stepsRoutes.post('/', createStepController.handle);

stepsRoutes.put('/:id/linkAnswer/:answerId', linkAnswerToStepController.handle);
stepsRoutes.put('/:id/undo/', undoStepController.handle);

export { stepsRoutes };
