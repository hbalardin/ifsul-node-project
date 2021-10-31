import { container } from 'tsyringe';

import { QuestionsRepository } from '../../modules/questions/repositories/implementations/QuestionsRepository';
import { IQuestionsRepository } from '../../modules/questions/repositories/IQuestionsRepository';

container.registerSingleton<IQuestionsRepository>(
  'QuestionsRepository',
  QuestionsRepository
);
