import { Answer } from '../model/Answer';

interface ICreateAnswerDTO {
  title: string;
  description?: string;
  questionId: string;
}

interface IAnswersRepository {
  create({ title, description, questionId }: ICreateAnswerDTO): Answer;
  listAll(): Answer[];
  listByQuestion(questionId: string): Answer[];
}

export { IAnswersRepository, ICreateAnswerDTO };
