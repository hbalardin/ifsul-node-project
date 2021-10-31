import { Router } from 'express';

import {
  CreateStepController,
  UpdateStepController,
} from '../modules/steps/useCases';

const stepsRoutes = Router();

const createStepController = new CreateStepController();
const updateStepController = new UpdateStepController();

stepsRoutes.post('/', createStepController.handle);

stepsRoutes.put('/:id', updateStepController.handle);

export { stepsRoutes };
