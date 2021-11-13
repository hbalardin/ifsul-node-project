import { User } from '../entities/User';

interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
}

interface IFindByUsernameDTO {
  username: string;
}

interface IUsersRepository {
  create({ name, password, username }: ICreateUserDTO): Promise<void>;
  findByUsername({ username }: IFindByUsernameDTO): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO, IFindByUsernameDTO };
