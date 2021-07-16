module.exports = app => {
  var router = require("express").Router();

  const league = require("../controllers/league.controller.js");
  const team = require("../controllers/team.controller.js");
  const employee = require("../controllers/employee.controller.js");

  models = [
    {route:'league', model: league},
    {route:'team', model: team},
    {route:'employee', model: employee},
  ]

  // general Api's
  for (let i = 0; i < models.length; i++){
    const m  = models[i];
    router.post(`/${m.route}`, m.model.create);
    router.put(`/${m.route}/:id`, m.model.update);
    router.get(`/${m.route}`, m.model.findAll);
    router.get(`/${m.route}/:id`, m.model.findOne);
    router.delete(`/${m.route}/:id`,m.model.delete);
  }

  router.get('/team/league/:id', team.findByLeague);

  app.use("/api", router);
};
