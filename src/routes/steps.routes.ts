import { Router } from 'express';

import { createStepController } from '../modules/steps/useCases';

const stepsRoutes = Router();

stepsRoutes.post('/', (request, response) => {
  return createStepController.handle(request, response);
});

export { stepsRoutes };
