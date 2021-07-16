module.exports = (sequelize, Sequelize) => {
  const League = sequelize.define("league", {
    lname: {
      type: Sequelize.STRING,
      primaryKey: true 
    },
    isheld: {
      type: Sequelize.BOOLEAN
    },
    ltype: {
      type: Sequelize.STRING
    }
  },  {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  });
  return League;
};
