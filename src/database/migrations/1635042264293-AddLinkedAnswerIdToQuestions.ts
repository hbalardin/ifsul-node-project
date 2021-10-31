import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddLinkedAnswerIdToQuestions1635042264293
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'questions',
      new TableColumn({
        name: 'linked_answer_id',
        type: 'uuid',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      'questions',
      new TableForeignKey({
        name: 'FKAnswerQuestion',
        referencedTableName: 'answers',
        referencedColumnNames: ['id'],
        columnNames: ['linked_answer_id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('questions', 'FKAnswerQuestion');

    await queryRunner.dropColumn('questions', 'linked_answer_id');
  }
}
