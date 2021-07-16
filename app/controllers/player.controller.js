const db = require("../models");
const model = require("../controllers/model.controller")
const Player = db.player;


exports.create = (req, res) => {
  model.create(req.body, res, Player);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update('national_id', id, req.body, res, Player);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, Player);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, Player);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, Player);
};