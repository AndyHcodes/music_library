const Sequelize = require("sequelize");
const ArtistModel = require("./artist");

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const setupDatabase = () => {
  const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: "mysql",
    logging: false,
  });

  const Artist = ArtistModel(connection, Sequelize);

  //Artist is what we will use to create the Artist object. "Connection" is required to link to the database and
  //sequalize is required as we are using Sequelize. Artistmodel is defined in the artists/model page and determines
  //the structure of the database

  connection.sync({ alter: true });
  return {
    Artist,
  };
};

module.exports = setupDatabase();
