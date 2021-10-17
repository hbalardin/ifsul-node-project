import { Step } from '../model/Step';

interface ICreateStepDTO {
  registerId: string;
  questionId: string;
}

interface IStepsRepository {
  create({ questionId, registerId }: ICreateStepDTO): Step;
}

export { IStepsRepository, ICreateStepDTO };
