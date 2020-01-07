module.exports = {
  development: {
    client: "pg", // This setting corresponds to the db connection js package
    connection: {
      database: "cluckr"
      // The following two fields are nrequired for a Linux
      // setup. If you don't have a password for your user,
      // you must create one.
      // To set a password, do the following:
      // $ psql
      // my_user=# \password
      //
      // username: "your postgres username",
      // password: "superscret"
    },
    migrations: {
      tableName: "migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }
};