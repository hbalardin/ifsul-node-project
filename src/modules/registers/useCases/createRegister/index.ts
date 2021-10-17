import { RegistersRepository } from '../../repositories/implementations/RegistersRepository';
import { CreateRegisterController } from './CreateRegisterController';
import { CreateRegisterUseCase } from './CreateRegisterUseCase';

const registersRepository = RegistersRepository.getInstance();
const createRegisterUseCase = new CreateRegisterUseCase(registersRepository);
const createRegisterController = new CreateRegisterController(
  createRegisterUseCase
);

export { createRegisterController };
