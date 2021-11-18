import { Router } from 'express';

import {
  CreateRegisterController,
  ListAllRegistersController,
  ListWeekRegistersController,
} from '../modules/registers/useCases';

const registersRoutes = Router();

const listAllRegistersController = new ListAllRegistersController();
const listWeekRegistersController = new ListWeekRegistersController();
const createRegisterController = new CreateRegisterController();

registersRoutes.get('/', listAllRegistersController.handle);
registersRoutes.get('/week', listWeekRegistersController.handle);

registersRoutes.post('/', createRegisterController.handle);

export { registersRoutes };
