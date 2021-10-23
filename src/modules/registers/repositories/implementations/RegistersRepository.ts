import { Register } from '../../model/Register';
import { IRegistersRepository } from '../IRegistersRepository';

class RegistersRepository implements IRegistersRepository {
  private registers: Register[];

  private static INSTANCE: RegistersRepository;

  private constructor() {
    this.registers = [];
  }

  public static getInstance(): RegistersRepository {
    if (!RegistersRepository.INSTANCE) {
      this.INSTANCE = new RegistersRepository();
    }

    return this.INSTANCE;
  }

  create(): Register {
    const register = new Register();

    Object.assign(register, {
      created_at: new Date(),
    });

    this.registers.push(register);

    return register;
  }

  listAll(): Register[] {
    return this.registers;
  }
}

export { RegistersRepository };
