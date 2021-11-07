import { Question } from '../entities/Question';

interface ICreateQuestionDTO {
  title: string;
  linkedAnswerId?: string;
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
  findByLinkedAnswer({
    linkedAnswerId,
  }: IFindByLinkedAnswerDTO): Promise<Question | undefined>;
  listAll(): Promise<Question[]>;
  update({ id, title, linkedAnswerId }: IUpdateQuestionDTO): Promise<Question>;
}

export {
  IQuestionsRepository,
  ICreateQuestionDTO,
  IFindByLinkedAnswerDTO,
  IUpdateQuestionDTO,
};
