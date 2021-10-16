import { IAnswersRepository } from '../../../answers/repositories/IAnswersRepository';
import { IQuestionsRepository } from '../../../questions/repositories/IQuestionsRepository';
import { Step } from '../../model/Step';
import { IStepsRepository } from '../../repositories/IStepsRepository';

interface IRequest {
  id: string;
  answerId: string;
}

class UpdateStepUseCase {
  constructor(
    private stepsRepository: IStepsRepository,
    private answersRepository: IAnswersRepository,
    private questionsRepository: IQuestionsRepository
  ) {}

  execute({ id, answerId }: IRequest): Step {
    const existentStep = this.stepsRepository.findById({ id });

    if (!existentStep) throw new Error('Step does not exists!');

    const selectedAnswer = this.answersRepository.findById({
      id: answerId,
    });

    if (!selectedAnswer) throw new Error('Answer does not exists!');

    const nextQuestion = this.questionsRepository.findByLinkedAnswer({
      linkedAnswerId: answerId,
    });

    let nextStep: Step;
    if (nextQuestion) {
      nextStep = this.stepsRepository.create({
        registerId: existentStep.register_id,
        questionId: nextQuestion.id,
      });
    }

    const updatedStep = this.stepsRepository.update({
      id,
      answerId,
      nextStepId: nextStep?.id,
    });
    return updatedStep;
  }
}

export { UpdateStepUseCase };
