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
      type: DataTypes.ENUM(
        "Business",
        "Technologies",
        "Documentation",
        "Challenge"
      ),
      allowNull: true,
    },
    archived: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
export default noteModel;
