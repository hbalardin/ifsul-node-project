import { Step } from '../model/Step';

interface ICreateStepDTO {
  registerId: string;
  questionId: string;
}

interface IFindByIdDTO {
  id: string;
}

interface IUpdateStepDTO {
  id: string;
  answerId: string;
  nextStepId?: string;
}

interface IStepsRepository {
  create({ questionId, registerId }: ICreateStepDTO): Step;
  findById({ id }: IFindByIdDTO): Step;
  listAll(): Step[];
  update({ id, answerId, nextStepId }: IUpdateStepDTO): Step;
}

export { IStepsRepository, ICreateStepDTO, IUpdateStepDTO, IFindByIdDTO };
