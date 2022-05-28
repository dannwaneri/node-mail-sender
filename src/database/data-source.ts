import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "node-mail",
  synchronize: true,
  logging: true,
  entities: [__dirname + "/entity/*.js", __dirname + "/entity/*.ts"],
  migrations: [__dirname + "/migration/*.js", __dirname + "/migration/*.ts"],
  subscribers: [],
});
