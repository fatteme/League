module.exports = (sequelize, Sequelize) => {
    const Supervisor = sequelize.define("supervisor", {
        national_id:{
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        sname:{
            type: Sequelize.STRING,
        },
    },  {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Supervisor;
  };
  