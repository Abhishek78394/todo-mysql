module.exports = (sequelize, DataTypes) => {
    const task = sequelize.define("task", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      user_id:{
        type: DataTypes.INTEGER,
    }
     
    });
    return task;
  };
  