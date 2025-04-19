// The connexion to the database
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("restaurantdb", "postgres", "TOOR", {
  host: "localhost",
  dialect: "postgres",
  logging: false, // quiet mode
});

module.exports = sequelize;
