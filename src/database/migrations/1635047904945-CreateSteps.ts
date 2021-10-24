import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSteps1635047904945 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'steps',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'register_id',
            type: 'uuid',
          },
          {
            name: 'question_id',
            type: 'uuid',
          },
          {
            name: 'answer_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'next_step_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'FKRegisterStep',
            referencedTableName: 'registers',
            referencedColumnNames: ['id'],
            columnNames: ['register_id'],
          },
          {
            name: 'FKQuestionStep',
            referencedTableName: 'questions',
            referencedColumnNames: ['id'],
            columnNames: ['question_id'],
          },
          {
            name: 'FKAnswerStep',
            referencedTableName: 'answers',
            referencedColumnNames: ['id'],
            columnNames: ['answer_id'],
          },
          {
            name: 'FKNextStep',
            referencedTableName: 'steps',
            referencedColumnNames: ['id'],
            columnNames: ['next_step_id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('steps');
  }
}
