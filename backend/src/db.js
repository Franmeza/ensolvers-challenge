import { Sequelize } from "sequelize";
import noteModel from "./models/note.model.js";
import userModel from "./models/user.model.js";
import * as dotenv from "dotenv";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

noteModel(sequelize);
userModel(sequelize);

const { Note, User } = sequelize.models;

User.hasMany(Note, { as: "notes", foreingKey: "usuarioId" });
Note.belongsTo(User, { foreingKey: "usuarioId" });

export { User, Note, sequelize as conn };
