import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  username: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, password, username }: IRequest): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByUsername({
      username,
    });

    if (userAlreadyExists) throw new Error('User already exists!');

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      username,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
