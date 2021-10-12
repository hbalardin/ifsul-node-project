import { Question } from '../model/Question';

interface ICreateQuestionDTO {
  title: string;
}

interface IQuestionsRepository {
  create({ title }: ICreateQuestionDTO): Question;
  listAll(): Question[];
}

export { IQuestionsRepository, ICreateQuestionDTO };
