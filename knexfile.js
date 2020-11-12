// Update with your config settings.
// require("dotenv").config(".env");

module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./payments/database/migrations",
      tableName: "knex_migrations"
    }
  }
};
