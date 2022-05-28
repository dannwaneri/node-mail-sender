import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column("varchar", { length: 320, unique: true })
  email!: string;
}
