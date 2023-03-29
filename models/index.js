const {Sequelize , DataTypes} = require('sequelize')
const sequelize = new Sequelize('student', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });


sequelize.authenticate()
.then(() => {
    console.log('Connected');
}).catch((err) => {
    console.log(err);
});



const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.task = require('./task')(sequelize, DataTypes);
db.user = require('./admin')(sequelize, DataTypes);
db.creater = require('./users')(sequelize, DataTypes);


db.sequelize.sync({force: false})
.then(() => {
    console.log('Drop and re-sync db.');
});


db.creater.hasOne(db.task,{foreignKey:"user_id"})
db.task.belongsTo(db.creater,{foreignKey:"user_id"})

module.exports = db;
