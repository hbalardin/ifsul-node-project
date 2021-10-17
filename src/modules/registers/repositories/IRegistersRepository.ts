import { Register } from '../model/Register';

interface IRegistersRepository {
  create(): Register;
}

export { IRegistersRepository };
