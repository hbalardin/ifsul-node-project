import { Step } from '../entities/Step';

interface ICreateStepDTO {
  registerId: string;
  questionId: string;
}

interface IDeleteDTO {
  id: string;
}

interface IFindByIdDTO {
  id: string;
}

interface IFindPreviousStepDTO {
  id: string;
}

interface IListByRegisterDTO {
  registerId: string;
}

interface ILinkAnswerStepDTO {
  id: string;
  answerId: string;
  nextStepId?: string;
}

interface IUnlinkAnswerStepDTO {
  id: string;
}

interface IStepsRepository {
  create({ questionId, registerId }: ICreateStepDTO): Promise<Step>;
  delete({ id }: IDeleteDTO): Promise<void>;
  findById({ id }: IFindByIdDTO): Promise<Step>;
  findPreviousStep({ id }: IFindPreviousStepDTO): Promise<Step>;
  linkAnswer({ id, answerId, nextStepId }: ILinkAnswerStepDTO): Promise<Step>;
  listAll(): Promise<Step[]>;
  listByRegister({ registerId }: IListByRegisterDTO): Promise<Step[]>;
  unlinkAnswer({ id }: IUnlinkAnswerStepDTO): Promise<Step>;
}

export {
  IStepsRepository,
  ICreateStepDTO,
  IDeleteDTO,
  IFindByIdDTO,
  IFindPreviousStepDTO,
  IListByRegisterDTO,
  ILinkAnswerStepDTO,
  IUnlinkAnswerStepDTO,
};
