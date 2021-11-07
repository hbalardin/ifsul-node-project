import { Answer } from '../entities/Answer';

interface ICreateAnswerDTO {
  title: string;
  description?: string;
  questionId: string;
}

interface IFindByIdDTO {
  id: string;
}

interface IListByQuestionDTO {
  questionId: string;
}

interface IUpdateAnswerDTO {
  id: string;
  title: string;
  description?: string;
  questionId: string;
}

interface IAnswersRepository {
  create({ title, description, questionId }: ICreateAnswerDTO): Promise<Answer>;
  findById({ id }: IFindByIdDTO): Promise<Answer | undefined>;
  listAll(): Promise<Answer[]>;
  listByQuestion({ questionId }: IListByQuestionDTO): Promise<Answer[]>;
  update({
    id,
    title,
    description,
    questionId,
  }: IUpdateAnswerDTO): Promise<Answer>;
}

export {
  IAnswersRepository,
  ICreateAnswerDTO,
  IFindByIdDTO,
  IListByQuestionDTO,
  IUpdateAnswerDTO,
};
