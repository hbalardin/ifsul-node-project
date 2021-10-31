import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Answer } from '../../answers/entities/Answer';

@Entity('questions')
class Question {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @OneToOne(() => Answer)
  @JoinColumn({ name: 'linked_answer_id' })
  linkedAnswer: Answer;

  @Column()
  linked_answer_id?: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { Question };
