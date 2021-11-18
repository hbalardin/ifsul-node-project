import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListWeekRegistersUseCase } from './ListWeekRegistersUseCase';

class ListWeekRegistersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listWeekRegistersUseCase = container.resolve(
      ListWeekRegistersUseCase
    );

    const registers = await listWeekRegistersUseCase.execute();

    return response.json(registers);
  }
}

export { ListWeekRegistersController };
