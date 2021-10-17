import { Answer } from '../model/Answer';

interface ICreateAnswerDTO {
  title: string;
  description?: string;
  questionId: string;
}

interface IFindByIdDTO {
  id: string;
}

interface IAnswersRepository {
  create({ title, description, questionId }: ICreateAnswerDTO): Answer;
  findById({ id }: IFindByIdDTO): Answer | undefined;
  listAll(): Answer[];
  listByQuestion(questionId: string): Answer[];
}

export { IAnswersRepository, ICreateAnswerDTO, IFindByIdDTO };
