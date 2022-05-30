import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column("varchar", { length: 320, unique: true })
  email!: string;

  @Column("varchar", { name: "unsubscribe-token", length: 512, nullable: true })
  unsubscribeToken!: string;
}
