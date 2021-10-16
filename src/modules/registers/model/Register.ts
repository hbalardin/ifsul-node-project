import { v4 as uuidV4 } from 'uuid';

class Register {
  id: string;

  customer_id?: string;

  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { Register };
