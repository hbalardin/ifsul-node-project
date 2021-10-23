import { Register } from '../model/Register';

interface IRegistersRepository {
  create(): Register;
  listAll(): Register[];
}

export { IRegistersRepository };
