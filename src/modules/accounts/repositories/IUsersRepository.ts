import { User } from '../entities/User';

interface ICreateUserDTO {
  name: string;
  username: string;
  password: string;
}

interface IFindByUsernameDTO {
  username: string;
}

interface IFindByIdDTO {
  id: string;
}

interface IUsersRepository {
  create({ name, password, username }: ICreateUserDTO): Promise<void>;
  findByUsername({ username }: IFindByUsernameDTO): Promise<User>;
  findById({ id }: IFindByIdDTO): Promise<User>;
}

export { IUsersRepository, ICreateUserDTO, IFindByUsernameDTO, IFindByIdDTO };
