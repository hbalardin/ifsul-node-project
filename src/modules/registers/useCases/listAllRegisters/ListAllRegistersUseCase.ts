import { inject, injectable } from 'tsyringe';

import { Register } from '../../entities/Register';
import { IRegistersRepository } from '../../repositories/IRegistersRepository';

@injectable()
class ListAllRegistersUseCase {
  constructor(
    @inject('RegistersRepository')
    private registersRepository: IRegistersRepository
  ) {}

  async execute(): Promise<Register[]> {
    const registers = await this.registersRepository.listAll();
    return registers;
  }
}

export { ListAllRegistersUseCase };
