import {DataTypes} from 'sequelize';
import  sequelize  from "../utils/database.js";

const User = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  otp: { type: DataTypes.STRING, allowNull: true },
  token: { type: DataTypes.TEXT, allowNull: true }, 
});

<<<<<<< Updated upstream
module.exports = User;
=======
export default User;
>>>>>>> Stashed changes
