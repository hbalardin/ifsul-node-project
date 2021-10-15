import { v4 as uuidV4 } from 'uuid';

class Question {
  id: string;

  title: string;

  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { Question };
