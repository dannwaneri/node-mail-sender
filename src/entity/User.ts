import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("increment")
  id!: number;

  @Column("varchar", { length: 320 })
  email!: string;
}
