const db = require("../models");
const model = require("../controllers/model.controller")
const Referee = db.referee;


exports.create = (req, res) => {
  model.create(req.body, res, Referee);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update('national_id', id, req.body, res, Referee);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, Referee);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, Referee);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, Referee);
};