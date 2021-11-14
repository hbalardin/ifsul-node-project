import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IAnswersRepository } from '../../../answers/repositories/IAnswersRepository';
import { IQuestionsRepository } from '../../../questions/repositories/IQuestionsRepository';
import { Step } from '../../entities/Step';
import { IStepsRepository } from '../../repositories/IStepsRepository';

interface IRequest {
  id: string;
  answerId: string;
}

@injectable()
class LinkAnswerToStepUseCase {
  constructor(
    @inject('StepsRepository')
    private stepsRepository: IStepsRepository,
    @inject('AnswersRepository')
    private answersRepository: IAnswersRepository,
    @inject('QuestionsRepository')
    private questionsRepository: IQuestionsRepository
  ) {}

  async execute({ id, answerId }: IRequest): Promise<Step> {
    const existentStep = await this.stepsRepository.findById({ id });

    if (!existentStep) throw new AppError('Step does not exists!');

    const selectedAnswer = await this.answersRepository.findById({
      id: answerId,
    });

    if (!selectedAnswer) throw new AppError('Answer does not exists!');

    const nextQuestion = await this.questionsRepository.findByLinkedAnswer({
      linkedAnswerId: answerId,
    });

    let nextStep: Step;
    if (nextQuestion) {
      nextStep = await this.stepsRepository.create({
        registerId: existentStep.register_id,
        questionId: nextQuestion.id,
      });
    }

    const updatedStep = await this.stepsRepository.linkAnswer({
      id,
      answerId,
      nextStepId: nextStep?.id,
    });

    return updatedStep;
  }
}

export { LinkAnswerToStepUseCase };
