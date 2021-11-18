import { Register } from '../entities/Register';

interface IRegistersRepository {
  create(): Promise<Register>;
  listAll(): Promise<Register[]>;
  listByWeek(): Promise<Register[]>;
}

export { IRegistersRepository };
