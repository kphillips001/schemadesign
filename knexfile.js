// this file stores configurations about how to connect
// to the database using Knex

module.exports = {
  development: {
    // the client changes depending on the target DBMS
    client: "sqlite3", // the database driver
    connection: {
      // the location of the database file
      filename: "./data/produce.db3", // for SQLite only
    },
    useNullAsDefault: true, // for SQLite only
    migrations: {
      // where to store the migration files
      directory: "./data/migrations",
    },
  },

  // configuration used on Heroku
  production: {
    client: "postgresql",
    connection: {
      host: "localhost",
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
