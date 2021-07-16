module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      national_id: {
        type: Sequelize.STRING,
        primaryKey: true 
      },
      ename:{
        type: Sequelize.STRING,
      },
      birth_date:{
        type: Sequelize.DATE,
      }
    },  {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Employee;
  };
  