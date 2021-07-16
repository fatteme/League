const db = require("../models");
const model = require("../controllers/model.controller")
const Team = db.team;


exports.create = (req, res) => {
  model.create(req.body, res, Team);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update(id, req.body, res, Team);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, Team);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, Team);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, Team);
};

exports.findByLeague = (req, res) => {
  const league = req.params.id;
  model.findByCondition({ league }, res, Team);
};