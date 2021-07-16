const db = require("../models");
const model = require("../controllers/model.controller")
const League = db.league;


exports.create = (req, res) => {
  console.log(League);
  model.create(req.body, res, League);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update(id, req.body, res, League);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, League);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, League);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, League);
};