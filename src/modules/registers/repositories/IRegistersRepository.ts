import { Register } from '../entities/Register';

interface IRegistersRepository {
  create(): Promise<Register>;
  listAll(): Promise<Register[]>;
}

export { IRegistersRepository };
