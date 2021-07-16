const { Deferrable } = require("sequelize");
const Employee = require('./employee.model')

module.exports = (sequelize, Sequelize) => {
    const CoachingStaff = sequelize.define("coaching_staff", {
      role: {
        type: Sequelize.STRING,
      },
      national_id:{
          primaryKey: true,
          type: Sequelize.INTEGER,
          references: {
            model: Employee,
            key: 'national_id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
          }
      }
    },  {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return CoachingStaff;
  };
  