const db = require("../models");
const model = require("../controllers/model.controller")
const Supervisor = db.supervisor;


exports.create = (req, res) => {
  model.create(req.body, res, Supervisor);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update('national_id', id, req.body, res, Supervisor);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, Supervisor);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, Supervisor);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, Supervisor);
};