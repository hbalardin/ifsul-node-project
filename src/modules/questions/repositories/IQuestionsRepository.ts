import { Question } from '../entities/Question';

interface ICreateQuestionDTO {
  title: string;
  linkedAnswerId?: string;
}

interface IFindByLinkedAnswerDTO {
  linkedAnswerId: string;
}

interface IQuestionsRepository {
  create({ title }: ICreateQuestionDTO): Promise<Question>;
  findByLinkedAnswer({
    linkedAnswerId,
  }: IFindByLinkedAnswerDTO): Promise<Question | undefined>;
  listAll(): Promise<Question[]>;
}

export { IQuestionsRepository, ICreateQuestionDTO, IFindByLinkedAnswerDTO };
