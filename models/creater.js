module.exports = (sequelize, DataTypes) => {
    const creater = sequelize.define("creater", {
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,  
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
email:{
    type: DataTypes.STRING,
    allowNull: false,
},
password:{
    type: DataTypes.STRING,
    allowNull: false,
},

    });
    return creater;
  };
  