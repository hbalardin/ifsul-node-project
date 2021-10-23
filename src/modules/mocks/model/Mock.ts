import { Answer } from '../../answers/model/Answer';
import { Question } from '../../questions/model/Question';
import { Register } from '../../registers/model/Register';
import { Step } from '../../steps/model/Step';

class Mock {
  answers: Answer[];

  questions: Question[];

  registers: Register[];

  steps: Step[];

  created_at: Date;

  constructor() {
    this.created_at = new Date();
  }
}

export { Mock };
