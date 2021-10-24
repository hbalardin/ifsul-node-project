import { getRepository, Repository } from 'typeorm';

import { Register } from '../../entities/Register';
import { IRegistersRepository } from '../IRegistersRepository';

class RegistersRepository implements IRegistersRepository {
  private repository: Repository<Register>;

  constructor() {
    this.repository = getRepository(Register);
  }

  async create(): Promise<Register> {
    const register = this.repository.create();

    await this.repository.save(register);

    return register;
  }

  async listAll(): Promise<Register[]> {
    const registers = await this.repository.find();
    return registers;
  }
}

export { RegistersRepository };
