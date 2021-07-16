const { Deferrable } = require("sequelize");
const Stadium = require('./stadium.model')

module.exports = (sequelize, Sequelize) => {
    const Ticket = sequelize.define("ticket", {
        tid:{
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        seat_no:{
            type: Sequelize.INTEGER,
        },
        stand: {
            type: Sequelize.STRING,
        },
        stadium:{
            type: Sequelize.STRING,
            references: {
              model: Stadium,
              key: 'sname',
              deferrable: Deferrable.INITIALLY_IMMEDIATE
            }
        }
      
    },  {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Ticket;
  };
  