const db = require("../models");
const model = require("../controllers/model.controller")
const CoachingStaff = db.coachingStaff;


exports.create = (req, res) => {
  model.create(req.body, res, CoachingStaff);
};

exports.update = (req, res) => {
    const id = req.params.id;
    model.update('national_id', id, req.body, res, CoachingStaff);
  };
  
exports.findAll = (req, res) => {
    model.findAll(res, CoachingStaff);
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  model.findOne(id, res, CoachingStaff);
};

exports.delete = (req, res) => {
  const id = req.params.id;
  model.delete(id, res, CoachingStaff);
};