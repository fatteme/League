const db = require("../models");
const model = require("../controllers/model.controller")
const Goal = db.goal;


exports.create = (req, res) => {
  model.create(req.body, res, Goal);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update('national_id', id, req.body, res, Goal);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, Goal);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, Goal);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, Goal);
};