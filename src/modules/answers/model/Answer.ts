import { v4 as uuidV4 } from 'uuid';

class Answer {
  id: string;

  title: string;

  description?: string;

  created_at: Date;

  question_id: string;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { Answer };
