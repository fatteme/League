const { Deferrable } = require("sequelize");
const Stadium = require('./stadium.model');
const Team = require('./team.model');

module.exports = (sequelize, Sequelize) => {
    const Lmatch = sequelize.define("lmatch", {
        mid:{
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        host_team:{
            type: Sequelize.STRING,
            references: {
              model: Team,
              key: 'tname',
              deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        guest_team:{
            type: Sequelize.STRING,
            references: {
              model: Team,
              key: 'tname',
              deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        time_from:{
            type: Sequelize.DATE,
        },
        time_to:{
            type: Sequelize.DATE,
        },
        mscore:{
            type: Sequelize.INTEGER,
        },
        rscore:{
            type: Sequelize.INTEGER,
        },
        stadium:{
            type: Sequelize.STRING,
            references: {
              model: Stadium,
              key: 'sname',
              deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        },
        spectators_number:{
            type: Sequelize.INTEGER,
        }  
    },  {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Lmatch;
  };
  