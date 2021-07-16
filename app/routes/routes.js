module.exports = app => {
  var router = require("express").Router();
  
  // League Model
  const league = require("../controllers/league.controller.js");
  router.post("/league", league.create);
  router.put("/league/:id", league.update);
  router.get("/league", league.findAll);
  router.get("/league/:id", league.findOne);
  router.delete("/league/:id", league.delete);

  app.use("/api", router);
};
