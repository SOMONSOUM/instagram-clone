import { Sequelize } from "sequelize";
import { config } from "dotenv";

config();
const sequelize = new Sequelize(
  `postgres://${process.env.ROOT}:${process.env.PASSWORD}@${process.env.HOST}:5533/${process.env.DATABASE}`
);

export default sequelize;
