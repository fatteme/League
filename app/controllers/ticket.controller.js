const db = require("../models");
const model = require("../controllers/model.controller")
const Ticket = db.ticket;


exports.create = (req, res) => {
  model.create(req.body, res, Ticket);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update('national_id', id, req.body, res, Ticket);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, Ticket);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, Ticket);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, Ticket);
};