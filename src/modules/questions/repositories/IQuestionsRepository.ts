import { Question } from '../entities/Question';

interface ICreateQuestionDTO {
  title: string;
  linkedAnswerId?: string;
}

interface IFindByIdDTO {
  id: string;
}

interface IFindByLinkedAnswerDTO {
  linkedAnswerId: string;
}

interface IUpdateQuestionDTO {
  id: string;
  title: string;
  linkedAnswerId?: string;
}

interface IQuestionsRepository {
  create({ title, linkedAnswerId }: ICreateQuestionDTO): Promise<Question>;
  findById({ id }: IFindByIdDTO): Promise<Question>;
  findByLinkedAnswer({
    linkedAnswerId,
  }: IFindByLinkedAnswerDTO): Promise<Question | undefined>;
  listAll(): Promise<Question[]>;
  update({ id, title, linkedAnswerId }: IUpdateQuestionDTO): Promise<Question>;
}

export {
  IQuestionsRepository,
  ICreateQuestionDTO,
  IFindByIdDTO,
  IFindByLinkedAnswerDTO,
  IUpdateQuestionDTO,
};
