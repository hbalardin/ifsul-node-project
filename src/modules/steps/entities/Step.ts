import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

import { Answer } from '../../answers/entities/Answer';
import { Question } from '../../questions/entities/Question';
import { Register } from '../../registers/entities/Register';

@Entity('steps')
class Step {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Register)
  @JoinColumn({ name: 'register_id' })
  register: Register;

  @Column()
  register_id: string;

  @ManyToOne(() => Question)
  @JoinColumn({ name: 'question_id' })
  question: Question;

  @Column()
  question_id: string;

  @ManyToOne(() => Answer)
  @JoinColumn({ name: 'answer_id' })
  answer: Answer;

  @Column()
  answer_id?: string;

  @OneToOne(() => Step)
  @JoinColumn({ name: 'next_step_id' })
  nextStep: Step;

  @Column()
  next_step_id?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { Step };
