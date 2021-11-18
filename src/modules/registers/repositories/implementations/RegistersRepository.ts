import { addDays, startOfWeek } from 'date-fns';
import { getRepository, Repository, Between } from 'typeorm';

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

  async listByWeek(): Promise<Register[]> {
    const today = new Date();
    const firstDayOfWeek = startOfWeek(today);

    const weekRegisters = await this.repository.find({
      where: {
        created_at: Between(firstDayOfWeek, addDays(firstDayOfWeek, 6)),
      },
    });

    return weekRegisters;
  }
}

export { RegistersRepository };
