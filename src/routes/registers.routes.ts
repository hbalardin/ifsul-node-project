import { Router } from 'express';

import { createRegisterController } from '../modules/registers/useCases';

const registersRoutes = Router();

registersRoutes.post('/', (request, response) => {
  return createRegisterController.handle(request, response);
});

export { registersRoutes };
