import { Entity, PrimaryColumn, Column, CreateDateColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('questions')
class Question {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  linked_answer_id?: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) this.id = uuidV4();
  }
}

export { Question };
