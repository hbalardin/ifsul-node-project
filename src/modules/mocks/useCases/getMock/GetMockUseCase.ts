import { IAnswersRepository } from '../../../answers/repositories/IAnswersRepository';
import { IQuestionsRepository } from '../../../questions/repositories/IQuestionsRepository';
import { IRegistersRepository } from '../../../registers/repositories/IRegistersRepository';
import { IStepsRepository } from '../../../steps/repositories/IStepsRepository';
import { Mock } from '../../model/Mock';

class GetMockUseCase {
  constructor(
    private answersRepository: IAnswersRepository,
    private questionsRepository: IQuestionsRepository,
    private registersRepository: IRegistersRepository,
    private stepsRepository: IStepsRepository
  ) {}

  execute(): Mock {
    const mock = new Mock();

    const answers = this.answersRepository.listAll();
    const questions = this.questionsRepository.listAll();
    const registers = this.registersRepository.listAll();
    const steps = this.stepsRepository.listAll();

    Object.assign(mock, {
      answers,
      questions,
      registers,
      steps,
    });

    return mock;
  }
}

export { GetMockUseCase };
