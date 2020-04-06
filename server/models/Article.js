const {sequelize} = require('../db');
const {Sequelize, Model} = require('sequelize')

// 定义文章模型
class Article extends Model {}
Article.init({
  
  id: {
    type: Sequelize.INTEGER(50),
    primaryKey: true,
    autoIncrement: true
  },
    // 文章标题
    title: Sequelize.STRING,
    // 文章内容
    content: Sequelize.TEXT,
    // 文章封面
    cover: Sequelize.STRING,
    //分类ID
    category_id: Sequelize.STRING,
    // 文章浏览次数
    browse: {
      type: Sequelize.INTEGER,
      defaultValue: 0
  },
}, {
  sequelize,
  modelName: 'article'
  // options
});

module.exports = {
  Article
}


