import { inject, injectable } from 'tsyringe';

import { Register } from '../../entities/Register';
import { IRegistersRepository } from '../../repositories/IRegistersRepository';

@injectable()
class CreateRegisterUseCase {
  constructor(
    @inject('RegistersRepository')
    private registersRepository: IRegistersRepository
  ) {}

  async execute(): Promise<Register> {
    const register = await this.registersRepository.create();
    return register;
  }
}

export { CreateRegisterUseCase };
