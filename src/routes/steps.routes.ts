import { Router } from 'express';

import {
  createStepController,
  updateStepController,
} from '../modules/steps/useCases';

const stepsRoutes = Router();

stepsRoutes.post('/', (request, response) => {
  return createStepController.handle(request, response);
});

stepsRoutes.put('/:id', (request, response) => {
  return updateStepController.handle(request, response);
});

export { stepsRoutes };
