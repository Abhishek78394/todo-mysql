module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
      id:{
        type: DataTypes.INTEGER,
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
    return user;
  };
  