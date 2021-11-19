import { inject, injectable } from 'tsyringe';

import { IStepsRepository } from '../../../steps/repositories/IStepsRepository';
import { Register } from '../../entities/Register';
import { IRegistersRepository } from '../../repositories/IRegistersRepository';

interface IResponse {
  registers: Register[];
  completedRegisters: Register[];
}

@injectable()
class ListWeekRegistersUseCase {
  constructor(
    @inject('RegistersRepository')
    private registersRepository: IRegistersRepository,
    @inject('StepsRepository')
    private stepsRepository: IStepsRepository
  ) {}

  async execute(): Promise<IResponse> {
    const registers = await this.registersRepository.listByWeek();

    const registerSteps = await Promise.all(
      registers.map(async (register) => {
        const steps = await this.stepsRepository.listByRegister({
          registerId: register.id,
        });

        return { registerId: register.id, steps };
      })
    );

    const completedRegisters = registerSteps
      .filter(({ steps }) => {
        return steps.every((step) => !!step.answer_id);
      })
      .map(({ registerId }) =>
        registers.find((register) => registerId === register.id)
      );

    return { registers, completedRegisters };
  }
}

export { ListWeekRegistersUseCase };
