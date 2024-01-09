import { DataTypes } from "sequelize";

const noteModel = (sequelize) => {
  sequelize.define("Note", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.CHAR,
      allowNull: false,
    },
    category: {
      type: DataTypes.ENUM("To-Do", "Work", "Technologies", "Documentation"),
      allowNull: true,
    },
  });
};
export default noteModel;
