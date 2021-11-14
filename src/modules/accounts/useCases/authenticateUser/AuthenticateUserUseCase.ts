import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    username: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ password, username }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByUsername({
      username,
    });

    if (!user) throw new AppError('Username or password invalid!');

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new AppError('Username or password invalid!');

    const token = sign({}, '31057cbc297f0b190a7f214ed13f0d6a', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user: { name: user.name, username: user.username },
      token,
    };
  }
}

export { AuthenticateUserUseCase };
