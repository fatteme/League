const db = require("../models");
const model = require("../controllers/model.controller")
const Card = db.card;


exports.create = (req, res) => {
  model.create(req.body, res, Card);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update('national_id', id, req.body, res, Card);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, Card);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, Card);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, Card);
};