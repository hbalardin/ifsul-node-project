import { inject, injectable } from 'tsyringe';

import { Answer } from '../../entities/Answer';
import { IAnswersRepository } from '../../repositories/IAnswersRepository';

@injectable()
class ListAllAnswersUseCase {
  constructor(
    @inject('AnswersRepository')
    private answersRepository: IAnswersRepository
  ) {}

  async execute(): Promise<Answer[]> {
    const answers = await this.answersRepository.listAll();
    return answers;
  }
}

export { ListAllAnswersUseCase };
