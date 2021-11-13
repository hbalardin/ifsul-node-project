import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddLinkedQuestionIdToAnswers1636313723315
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'answers',
      new TableColumn({
        name: 'linked_question_id',
        type: 'uuid',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      'answers',
      new TableForeignKey({
        name: 'FKQuestionAnswers',
        referencedTableName: 'questions',
        referencedColumnNames: ['id'],
        columnNames: ['linked_question_id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('answers', 'FKQuestionAnswers');

    await queryRunner.dropColumn('questions', 'linked_answer_id');
  }
}
