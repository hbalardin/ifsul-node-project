import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListAllRegistersUseCase } from './ListAllRegistersUseCase';

class ListAllRegistersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllRegistersUseCase = container.resolve(ListAllRegistersUseCase);

    const registers = await listAllRegistersUseCase.execute();

    return response.json(registers);
  }
}

export { ListAllRegistersController };
