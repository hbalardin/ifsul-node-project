import { Question } from '../model/Question';

interface ICreateQuestionDTO {
  title: string;
  linkedAnswerId?: string;
}

interface IFindByLinkedAnswerDTO {
  linkedAnswerId: string;
}

interface IQuestionsRepository {
  create({ title, linkedAnswerId }: ICreateQuestionDTO): Question;
  findByLinkedAnswer({
    linkedAnswerId,
  }: IFindByLinkedAnswerDTO): Question | undefined;
  listAll(): Question[];
}

export { IQuestionsRepository, ICreateQuestionDTO, IFindByLinkedAnswerDTO };
