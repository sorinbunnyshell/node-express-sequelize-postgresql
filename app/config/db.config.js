module.exports = {
  HOST: "localhost",
  USER: "postgresUser",
  PASSWORD: "postgresPW",
  DB: "postgresDB",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
