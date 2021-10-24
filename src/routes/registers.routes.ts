import { Router } from 'express';

import { CreateRegisterController } from '../modules/registers/useCases';

const registersRoutes = Router();

const createRegisterController = new CreateRegisterController();

registersRoutes.post('/', createRegisterController.handle);

export { registersRoutes };
