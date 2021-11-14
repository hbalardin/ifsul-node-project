import { container } from 'tsyringe';

import { UsersRepository } from '../../modules/accounts/repositories/implementations/UsersRepository';
import { IUsersRepository } from '../../modules/accounts/repositories/IUsersRepository';
import { IAnswersRepository } from '../../modules/answers/repositories/IAnswersRepository';
import { AnswersRepository } from '../../modules/answers/repositories/implementations/AnswersRepository';
import { QuestionsRepository } from '../../modules/questions/repositories/implementations/QuestionsRepository';
import { IQuestionsRepository } from '../../modules/questions/repositories/IQuestionsRepository';
import { RegistersRepository } from '../../modules/registers/repositories/implementations/RegistersRepository';
import { IRegistersRepository } from '../../modules/registers/repositories/IRegistersRepository';
import { StepsRepository } from '../../modules/steps/repositories/implementations/StepsRepository';
import { IStepsRepository } from '../../modules/steps/repositories/IStepsRepository';

container.registerSingleton<IQuestionsRepository>(
  'QuestionsRepository',
  QuestionsRepository
);

container.registerSingleton<IAnswersRepository>(
  'AnswersRepository',
  AnswersRepository
);

container.registerSingleton<IRegistersRepository>(
  'RegistersRepository',
  RegistersRepository
);

container.registerSingleton<IStepsRepository>(
  'StepsRepository',
  StepsRepository
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
