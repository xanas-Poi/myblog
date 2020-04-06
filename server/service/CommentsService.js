const { Comments } = require('../models/comments')
const { Article } = require('../models/Article')

class CommentsService {
    //创建评论
    static async createComments(v){
        console.log(v)
         // 查询文章
        const article = await Article.findOne({
                where: {
                    id:v.article_id
                }
            });
        if (!article) {
            return msg = ('未找到评论的文章')
        }
        //储存评论
        const comments = new Comments()
        comments.article_id = v.article_id
        comments.content = v.content
        comments.parent_id = v.parent_id
        comments.email = v.email
        comments.nickname = v.nickname
        return comments.save()
    }

    //删除评论
    static async destroyComments(id){
        const comments = await Comments.findOne({
            where: {
                id
            }
        });
        if (!comments) {
            return msg = ('没有找到相关评论');
        }
        comments.destroy()
    }

    static async updateComments(id,v){
        //findByPk 通过主键来查询一条记录
        const comments = await Comments.findByPk(id);
        if (!comments) {
            return msg = ('评论未存在')
        }
        // 更新文章
        comments.article_id = v.article_id
        comments.parent_id = v.parent_id
        comments.content = v.content
        comments.email = v.email
        comments.nickname = v.nickname
        return comments.save()
    }

    static async detailComments(id){
        //通过ID查找评论
        const comments = await Comments.findOne({
            where: {
                id
            }
        });
        //判断文章存在
        if (!comments) {
            return msg = ('评论未找到')
        }else{
            return comments
        };
    }

    // 评论列表
    static async getCommentsList(page = 1){
        const pageSize = 10;
        const comments = await Comments.findAndCountAll({
            limit: pageSize,//每页10条
            offset: (page - 1) * pageSize,
            order: [
                ['createdAt', 'DESC']
            ]
        })

        return {
            data: comments.rows,
            meta: {
                current_page: parseInt(page),
                per_page: 10,
                count: comments.count,
                total: comments.count,
                total_pages: Math.ceil(comments.count / 10),
            }
        };
    }

    // 文章下的评论
    static async getArticleComments(article_id, page = 1, desc = 'createdAt'){
        const pageSize = 10;
        const comments = await Comments.findAndCountAll({
            where: {
                article_id,
            },
            limit: pageSize,//每页10条
            offset: (page - 1) * pageSize,
            order: [
                [desc, 'DESC']
            ],
            attributes: {
                exclude: ['email']
            }
        });
        return {
            data: comments.rows,
            // 分页
            meta: {
                current_page: parseInt(page),
                per_page: 10,
                count: comments.count,
                total: comments.count,
                total_pages: Math.ceil(comments.count / 10),
            }
        };
    }
}
module.exports = { CommentsService }