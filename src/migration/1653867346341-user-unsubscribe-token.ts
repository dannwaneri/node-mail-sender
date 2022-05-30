import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class userUnsubscribeToken1653867346341 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.addColumn(
      "user",
      new TableColumn({
        name: "unsubscribe-token",
        type: "varchar(512)",
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
