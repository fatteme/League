const db = require("../models");
const model = require("../controllers/model.controller")
const Employee = db.employee;


exports.create = (req, res) => {
  model.create(req.body, res, Employee);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update('national_id', id, req.body, res, Employee);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, Employee);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, Employee);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, Employee);
};