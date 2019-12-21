const { ArticleService } = require('../service/ArticleService')
const { CategoryService } = require('../service/CategoryService')
const CommentsService = require('../service/CommentsService')

const {Resolve} = require('../lib/helper');
const res = new Resolve();

module.exports = {

    // 创建文章
    create: async (ctx) => {
        const getData = ctx.request.body;
        const msg = await ArticleService.createArticle(getData)
        ctx.response.status = 200
        ctx.body = res.msg(msg||'创建文章成功', msg?1:0 );
    },

    //删除文章
    destroy: async(ctx)=>{
        const getId = ctx.params;
        const msg = await ArticleService.destroyArticle(getId);
        ctx.response.status = 200
        ctx.body = res.msg(msg||'文章删除成功', msg?1:0 );
    },
    
    //更新文章
    update: async(ctx)=>{
        const getId = ctx.params.id
        const getData = ctx.request.body;
        const msg = await ArticleService.updateArticle(getId,getData);
        ctx.response.status = 200
        ctx.body = res.msg(msg||'文章更新成功', msg?1:0 );
    },

    //文章详情
    detail: async (ctx)=>{
        const { id }= ctx.params;
        const article =  await ArticleService.detailArticle(id);

        // 获取关联此文章的分类详情
        const category = await CategoryService.detailCategory(article.getDataValue('category_id'));

        // 获取关联此文章的评论列表
        const commentsList = await CommentsService.getArticleComments(id);

        // 更新文章浏览
        await ArticleService.updateArticleBrowse(id, ++article.browse);

        //把分类数据
        await article.setDataValue('category_detail', category);
        await article.setDataValue('comments_list', commentsList);

        ctx.response.status = 200
        if(typeof(article)==='object'){
            ctx.body = res.json(article,'查找文章详情成功');
        }else{
            ctx.body = res.msg(article,1);
        }
    },

    //文章列表
    list: async(ctx)=>{
        // 参数获取 --页码，排序方法，分类ID，搜索关键字
        const {page, desc, category_id, keyword} = ctx.request.query;
        console.log({page, desc, category_id, keyword})
        // 查询文章列表
        const data = await ArticleService.getArticleList(page, desc, category_id, keyword);
        // 返回结果
        ctx.response.status = 200
        ctx.body = res.json(data,'获取文章列表成功');
    },

    echarts: async(ctx)=>{
        const data = await ArticleService.getArticle_echarts();
        ctx.body = res.json(data);
    }

}