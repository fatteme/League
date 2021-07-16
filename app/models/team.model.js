const { Deferrable } = require("sequelize");
const League = require('./league.model')

module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define("team", {
      tname: {
        type: Sequelize.STRING,
        primaryKey: true 
      },
      league:{
          type: Sequelize.STRING,
          references: {
            model: League,
            key: 'lname',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
          }
      }
    },  {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Team;
  };
  