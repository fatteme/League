const db = require("../models");
const model = require("../controllers/model.controller")
const Lmatch = db.lmatch;


exports.create = (req, res) => {
  model.create(req.body, res, Lmatch);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update('national_id', id, req.body, res, Lmatch);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, Lmatch);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, Lmatch);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, Lmatch);
};