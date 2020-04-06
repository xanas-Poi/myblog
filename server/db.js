const Sequelize = require('sequelize');
const {
    dbName,
    host,
    port,
    username,
    password,
    dialect
} = require('./server.base.config').mysql


const sequelize = new Sequelize(dbName, username, password, {
    host,
    dialect,
    port,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    logging: true,
    //freezeTableName,默认为true,会自动给表名表示为复数: user => users，为false则表示，使用我设置的表名
    freezeTableName: false,

    //timestamp字段，默认为true，表示数据库中是否会自动更新createdAt和updatedAt字段，false表示不会增加这个字段。
    timestamps: true,

    // 在日常开发中删除数据记录是一大禁忌，因此我们删除数据并不会真正删除，而是为他添加
    // deletedAt字段
    paranoid:false,

    dialectOptions: {
        dateStrings: true,
        typeCast: true
    },

    //东八时区
    timezone: '+08:00' 
});

// 测试连接
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

//同步数据库模型专用 此操作将会删除数据库的表重新创建,请谨慎使用
sequelize.sync({
    force: false //是否覆盖表
})

module.exports = {
    sequelize
}