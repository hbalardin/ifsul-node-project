import { v4 as uuidV4 } from 'uuid';

class Step {
  id: string;

  register_id: string;

  question_id: string;

  answer_id?: string;

  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { Step };
