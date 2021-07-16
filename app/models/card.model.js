const { Deferrable } = require("sequelize");
const Player = require('./player.model');
const Lmatch = require('./lmatch.model');

module.exports = (sequelize, Sequelize) => {
    const Card = sequelize.define("card", {
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
        ctime:{
            primaryKey: true,
            type: Sequelize.DATE,
        },
        ctype:{
            type: Sequelize.STRING,
        },
    },  {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Card;
  };
  