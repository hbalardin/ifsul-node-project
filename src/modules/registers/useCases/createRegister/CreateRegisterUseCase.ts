import { Register } from '../../model/Register';
import { IRegistersRepository } from '../../repositories/IRegistersRepository';

class CreateRegisterUseCase {
  constructor(private registersRepository: IRegistersRepository) {}

  execute(): Register {
    const register = this.registersRepository.create();
    return register;
  }
}

export { CreateRegisterUseCase };
