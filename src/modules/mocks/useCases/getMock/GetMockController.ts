import { Request, Response } from 'express';

import { GetMockUseCase } from './GetMockUseCase';

class GetMockController {
  constructor(private getMockUseCase: GetMockUseCase) {}

  handle(request: Request, response: Response): Response {
    const mock = this.getMockUseCase.execute();

    return response.json(mock);
  }
}

export { GetMockController };
