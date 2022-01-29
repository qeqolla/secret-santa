import { Sequelize } from 'sequelize';
import * as dotenv from "dotenv";

dotenv.config();

const db = new Sequelize('app', '', '', {
    storage: './secret_santa.sqlite',
    dialect: 'sqlite',
    logging: false,
});

export default db;
