import { MigrationInterface, QueryResult, QueryRunner, Table } from "typeorm";

export class user1653763056540 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            generationStrategy: "identity",
            isPrimary: true,
          },
          {
            name: "email",
            type: "varchar(320)",
          },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
