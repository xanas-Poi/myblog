const { Article } = require('../models/Article')
const { Comments } = require('../models/comments')
const { Category } = require('../models/category')

const {Sequelize, Op} = require('sequelize')


class ArticleService {

    //创建文章
    static async createArticle(v){
        //查询文章是否存在
        const hasArticle = await Article.findOne({
            where: {
                title: v.title
            }
        });
        // 判断文章是否存在
        if (hasArticle) {
            return (`文章${v.title}已经存在`)
        };
        //创建文章
        const article = new Article();
        article.title = v.title
        article.content = v.content
        article.category_id= v.category_id
        article.cover = v.cover
        article.browse = v.browse
        article.save()       
    }

    //删除文章
    static async destroyArticle({id}){
        //查询文章是否存在
        const article = await Article.findOne({
            where: {
                id
            }
        });
        //如果存在就删除文章，未存在就返回错误信息
        if (article) {
            article.destroy()
        }else{
            return ('文章未存在')
        }
    }

    //更新文章
    static async updateArticle(id,data){
        //findByPk 通过主键来查询一条记录
        const article = await Article.findByPk(id);
        //判断
        if (!article) {
            return ('文章未存在')
        }
        // 更新文章
        article.title = data.title
        article.content = data.content
        article.category_id= data.category_id
        article.cover = data.cover
        article.browse = data.browse
        article.save();
    }

    // 文章详情
    static async detailArticle(id){
        // 通过ID查找文章
        const article = await Article.findOne({
            where: {
                id
            }
        });
        //判断
        if (!article) {
            return ('未找到该详情文章')
        }
        return article
    }

    // 更新文章浏览次数
    static async updateArticleBrowse(id, browse) {
        // 查询文章
        const article = await Article.findByPk(id);
        if (!article) {
            return ('没有找到相关文章');
        }
        // 更新文章浏览
        article.browse = browse;
        article.save();
    }



    
     // 获取每篇文章评论
     static async _getArticleComments(articleIds) {
        return await Comments.findAll({
            where: {
                article_id: {
                    [Op.in]: articleIds
                }
            },
            group: ['article_id'],
            attributes: ['article_id', [Sequelize.fn('COUNT', '*'), 'count']]
        })
    }

    // 设置每章文章评论总数
    static _setArticleComments(article, comments) {
        let count = 0;
        comments.forEach(item => {
            if (parseInt(article.id) === parseInt(item.article_id)) {
                count = item.get('count')
            }
        })
        article.setDataValue('comments_nums', count);

        return article
    }

    // 获取每篇文章分类详情
    static async _getArticleCategoryDetail(categoryIds) {
        return await Category.findAll({
            where: {
                id: {
                    [Op.in]: categoryIds  //[Op.in]: [1, 2],  // 在 [1, 2] 之中
                }
            }
        })
    }

    // 设置每章文章分类详情
    static _setArticleCategoryDetail(article, category) {
        category.forEach(item => {
            if (parseInt(article.category_id) === parseInt(item.id)) {
                article.setDataValue('category_detail', item);
            }
        })

        return article
    }

    // 获取文章列表
    static async getArticleList(page = 1, desc = 'createdAt', category_id, keyword) {
        const pageSize = 10;

        // 筛选方式
        let filter = {};

        // 筛选方式：存在分类ID
        if (category_id) {
            filter.category_id = category_id;
        }

        // 筛选方式：存在搜索关键字
        if (keyword) {
            filter.title = {
                [Op.like]: `%${keyword}%`
            };
        }
        const article = await Article.findAndCountAll({
            limit: pageSize,//每页10条
            offset: (page - 1) * pageSize,
            where: filter,
            order: [
                [desc, 'DESC']
            ]
        });

        const categoryIds = [];
        const articleIds = [];

        const r = article.rows;
        r.forEach(article => {
            articleIds.push(article.id);
            categoryIds.push(article.category_id);
        });

        // // 获取每篇文章评论
        const comments = await ArticleService._getArticleComments(articleIds);
        r.forEach(article => {
            ArticleService._setArticleComments(article, comments)
        });

        // 获取每篇文章分类详情
        const category = await ArticleService._getArticleCategoryDetail(categoryIds);
        r.forEach(article => {
            ArticleService._setArticleCategoryDetail(article, category)
        });

        return {
            data: r,
            // 分页
            meta: {
                current_page: parseInt(page),
                per_page: 10,
                count: article.count,
                total: article.count,
                total_pages: Math.ceil(article.count / 10),
            }
        };
    }

    //一天内博客发表数目
    static async _getArticle_dayCounts(day=1){
        return await Article.findAndCountAll({
            where:{
                createdAt:{
                    [Op.lt]:new Date(),
                    [Op.gt]:new Date(new Date()-24*day*60*60*1000)
                }
            },
         })
    }
}

module.exports = {
    ArticleService
}