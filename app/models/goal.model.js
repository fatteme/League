const { Deferrable } = require("sequelize");
const Player = require('./player.model');
const Lmatch = require('./lmatch.model');

module.exports = (sequelize, Sequelize) => {
    const Goal = sequelize.define("goal", {
        pid:{
            primaryKey: true,
            type: Sequelize.STRING,
            references: {
              model: Player,
              key: 'national_id',
              deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        mid:{
            primaryKey: true,
            type: Sequelize.STRING,
            references: {
              model: Lmatch,
              key: 'mid',
              deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        gtime:{
            primaryKey: true,
            type: Sequelize.DATE,
        },
    },  {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Goal;
  };
  