module.exports = (sequelize, Sequelize) => {
    const Stadium = sequelize.define("stadium", {
        sname:{
            primaryKey: true,
            type: Sequelize.STRING,
        },
        stype:{
            type: Sequelize.STRING,
        },
        capacity: {
            type: Sequelize.INTEGER,
        },
    },  {
      freezeTableName: true,
      timestamps: false,
      createdAt: false,
      updatedAt: false,
    });
    return Stadium;
  };
  