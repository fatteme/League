const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.buyPlayer = require("./buyPlayer.model.js")(sequelize, Sequelize);
db.card = require("./card.model.js")(sequelize, Sequelize);
db.coachingStaff = require("./coachingStaff.model.js")(sequelize, Sequelize);
db.contract = require("./contract.model.js")(sequelize, Sequelize);
db.employee = require("./employee.model.js")(sequelize, Sequelize);
db.goal = require("./goal.model.js")(sequelize, Sequelize);
db.league = require("./league.model.js")(sequelize, Sequelize);
db.lmatch = require("./lmatch.model.js")(sequelize, Sequelize);
db.matchTicket = require("./matchTicket.model.js")(sequelize, Sequelize);
db.player = require("./player.model.js")(sequelize, Sequelize);
db.playerMatch = require("./PlayerMatch.model.js")(sequelize, Sequelize);
db.referee = require("./referee.model.js")(sequelize, Sequelize);
db.refereeMatch = require("./refereeMatch.model.js")(sequelize, Sequelize);
db.stadium = require("./stadium.model.js")(sequelize, Sequelize);
db.superviseMatch = require("./superviseMatch.model.js")(sequelize, Sequelize);
db.supervisor = require("./supervisor.model.js")(sequelize, Sequelize);
db.team = require("./team.model.js")(sequelize, Sequelize);
db.ticket = require("./ticket.model.js")(sequelize, Sequelize);
db.playerView = require("./playerView.model.js")(sequelize, Sequelize);
db.refereeView = require("./refereeView.model.js")(sequelize, Sequelize);
db.teamAdminView = require("./teamAdminView.model.js")(sequelize, Sequelize);
db.ticketAdminView = require("./ticketAdminView.model.js")(sequelize, Sequelize);

module.exports = db;
