import { Router } from 'express';

import { getMockController } from '../modules/mocks/useCases';

const mocksRoutes = Router();

mocksRoutes.get('/', (request, response) => {
  return getMockController.handle(request, response);
});

export { mocksRoutes };
