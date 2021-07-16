module.exports = app => {
  var router = require("express").Router();

  const buyPlayer = require("../controllers/buyPlayer.controller.js")
  const card = require("../controllers/card.cardcontroller.js")
  const coachingStaff = require("../controllers/coachingStaff.controller.js")
  const contract = require("../controllers/contract.controller.js")
  const employee = require("../controllers/employee.controller.js");
  const goal = require("../controllers/goal.controller.js")
  const league = require("../controllers/league.controller.js");
  const lmatch = require("../controllers/lmatch.controller.js")
  const matchTicket = require("../controllers/matchTicket.controller.js")
  const player = require("../controllers/player.controller.js")
  const playerMatch = require("../controllers/PlayerMatch.controller.js")
  const referee = require("../controllers/referee.controller.js")
  const refereeMatch = require("../controllers/refereeMatch.controller.js")
  const stadium = require("../controllers/stadium.controller.js")
  const superviseMatch = require("../controllers/superviseMatch.controller.js")
  const supervisor = require("../controllers/supervisor.controller.js")
  const team = require("../controllers/team.controller.js");
  const ticket = require("../controllers/ticket.controller.js")

  models = [
    { route: 'card', model: card },
    { route: 'coaching-staff', model: coachingStaff },
    { route: 'contract', model: contract },
    { route: 'employee', model: employee },
    { route: 'goal', model: goal },
    { route: 'league', model: league },
    { route: 'match', model: lmatch },
    { route: 'player', model: player },
    { route: 'referee', model: referee },
    { route: 'stadium', model: stadium },
    { route: 'supervisor', model: supervisor },
    { route: 'team', model: team },
    { route: 'ticket', model: ticket },
  ]

  // general Api's
  for (let i = 0; i < models.length; i++) {
    const m = models[i];
    router.post(`/${m.route}`, m.model.create);
    router.put(`/${m.route}/:id`, m.model.update);
    router.get(`/${m.route}`, m.model.findAll);
    router.get(`/${m.route}/:id`, m.model.findOne);
    router.delete(`/${m.route}/:id`, m.model.delete);
  }

  // additional Api's
  router.get('/team/league/:id', team.findByLeague);

  app.use("/api", router);
};
