import { getRepository, Repository } from 'typeorm';

import { User } from '../../entities/User';
import {
  ICreateUserDTO,
  IFindByUsernameDTO,
  IUsersRepository,
} from '../IUsersRepository';

export class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, password, username }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ name, password, username });
    await this.repository.save(user);
  }

  async findByUsername({ username }: IFindByUsernameDTO): Promise<User> {
    const user = this.repository.findOne({ username });
    return user;
  }
}
