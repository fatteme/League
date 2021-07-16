module.exports = (sequelize, Sequelize) => {
    const Player = sequelize.define("player", {
        national_id:{
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        pnumber:{
            type: Sequelize.INTEGER,
        },
    },  {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Player;
  };
  