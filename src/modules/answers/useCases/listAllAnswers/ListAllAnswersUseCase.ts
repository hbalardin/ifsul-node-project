import { Answer } from '../../model/Answer';
import { IAnswersRepository } from '../../repositories/IAnswersRepository';

class ListAllAnswersUseCase {
  constructor(private answersRepository: IAnswersRepository) {}

  execute(): Answer[] {
    const answers = this.answersRepository.listAll();
    return answers;
  }
}

export { ListAllAnswersUseCase };
