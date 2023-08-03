const path = require('path');
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    connector: "bookshelf",
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "testdb"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "password"),
      ssl: env.bool("DATABASE_SSL", false),
    },
    options: {
      debug: false,
      acquireConnectionTimeout: 100000,
      pool: {
        min: 0,
        max: 10,
        createTimeoutMillis: 30000,
        acquireTimeoutMillis: 600000,
        idleTimeoutMillis: 20000,
        reapIntervalMillis: 20000,
        createRetryIntervalMillis: 200,
      },
    },
  },
}
);