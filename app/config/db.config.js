module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "5et422yh",
  DB: "League",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
