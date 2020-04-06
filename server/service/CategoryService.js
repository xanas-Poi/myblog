const { Article } = require('../models/Article')
const { Category } = require('../models/category')

const { ArticleService } = require('../service/ArticleService')
const {Sequelize, Op} = require('sequelize')



class CategoryService {

    //创建分类
    static async createCategory(v){
        // 查询是否存在重复的分类
        const hasCategory = await Category.findOne({
            where: {
                name:v.name
            }
        });
        if (hasCategory) {
            return ('分类已存在');
        }
        //储存分类
        const category = new Category();
        category.name = v.name
        category.key = v.key
        category.parent_id = v.parent_id
        category.save();
    }

    //删除分类
    static async destroyCategory({id}){
        // 查询分类是否存在
        const category = await Category.findOne({
            where: {
                id
            }
        });
        //如果存在就删除分类，未存在就返回错误信息
        if (!category) {
            return ('分类未存在')   
        }
        category.destroy()
    }

    //更新分类
    static async updateCategory(id,data){
                //findByPk 通过主键来查询一条记录
                const category = await Category.findByPk(id);
                if (!category) {
                    return msg = ('分类未存在')
                }
                // 更新分类
                category.name = data.name
                category.key = data.key
                category.parent_id = data.parent_id
                category.save();
    }

    //分类详情
    static async detailCategory(id){
        //通过ID查找分类
        const category = await Category.findOne({
            where: {
                id
            }
        });
        //判断分类存在
        if (!category) {
            return ('未找到该详情分类')
        }else{
            return category
        };
    }


    // 分类列表
    static async getCategoryList() {
        const category = await Category.findAll({
            row: true
        });

        // 统计每个分类下有多少文章
        const ids = [];
        category.forEach(item => {
            ids.push(item.id);
        });
        const article = await CategoryService._getArticle(ids);

        category.forEach(item => {
            CategoryService._setArticle(item, article)
        })

        return category;

    }




    // 获取每个分类下有多少文章
    static async _getArticle(ids) {
        return await Article.findAll({
            where: {
                category_id: {
                    [Op.in]: ids
                }
            },
            group: ['category_id'],
            attributes: ['category_id', [Sequelize.fn('COUNT', '*'), 'count']]
        })
    }

    // 设置每个分类下的文章总数
    static _setArticle(category, article) {
        let count = 0;
        article.forEach(item => {
            if (parseInt(category.id) === parseInt(item.category_id)) {
                count = item.get('count')
            }
        })
        category.setDataValue('article_nums', count);

        return category
    }

    // 获取一个分类下的文章
    static async getCategoryArticle(category_id, page = 1, desc = 'createdAt') {
        const pageSize = 10;

        const article = await Article.findAndCountAll({
            limit: pageSize,//每页10条
            offset: (page - 1) * pageSize,
            where: {
                category_id
            },
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
    
}

module.exports = {
    CategoryService
}

// module.exports = {

//     list: async()=>{
//         const allArticle = await Category.findAll({
//             // order: [
//             //     ['createdAt', 'DESC']
//             // ],
//             row: true
//         })
//         return allArticle
//     },

// }