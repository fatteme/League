const db = require("../models");
const model = require("../controllers/model.controller")
const Stadium = db.stadium;


exports.create = (req, res) => {
  model.create(req.body, res, Stadium);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update('national_id', id, req.body, res, Stadium);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, Stadium);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, Stadium);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, Stadium);
};