import { Router } from 'express';

import {
  CreateStepController,
  updateStepController,
} from '../modules/steps/useCases';

const stepsRoutes = Router();

const createStepController = new CreateStepController();

stepsRoutes.post('/', createStepController.handle);

stepsRoutes.put('/:id', (request, response) => {
  return updateStepController.handle(request, response);
});

export { stepsRoutes };
