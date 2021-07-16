module.exports = (sequelize, Sequelize) => {
    const Referee = sequelize.define("referee", {
        national_id:{
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        rname:{
            type: Sequelize.STRING,
        },
    },  {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Referee;
  };
  