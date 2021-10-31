import { Step } from '../entities/Step';

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
  create({ questionId, registerId }: ICreateStepDTO): Promise<Step>;
  findById({ id }: IFindByIdDTO): Promise<Step>;
  listAll(): Promise<Step[]>;
  update({ id, answerId, nextStepId }: IUpdateStepDTO): Promise<Step>;
}

export { IStepsRepository, ICreateStepDTO, IUpdateStepDTO, IFindByIdDTO };
