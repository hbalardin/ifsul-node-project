import { container } from 'tsyringe';

import { IAnswersRepository } from '../../modules/answers/repositories/IAnswersRepository';
import { AnswersRepository } from '../../modules/answers/repositories/implementations/AnswersRepository';
import { QuestionsRepository } from '../../modules/questions/repositories/implementations/QuestionsRepository';
import { IQuestionsRepository } from '../../modules/questions/repositories/IQuestionsRepository';

container.registerSingleton<IQuestionsRepository>(
  'QuestionsRepository',
  QuestionsRepository
);

container.registerSingleton<IAnswersRepository>(
  'AnswersRepository',
  AnswersRepository
);
