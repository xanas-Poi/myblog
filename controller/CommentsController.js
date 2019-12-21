const CommentsService = require("../service/CommentsService");
const {Resolve} = require('../lib/helper');
const res = new Resolve();

module.exports = {


    create: async (ctx) => {
        const getData = ctx.request.body;
        console.log(getData)
        const msg = await CommentsService.createComments(getData);
        ctx.response.status = 200
        if(typeof(msg)==='object'){
            ctx.body = res.json(msg,'评论创建成功');
        }else{
            ctx.body = res.msg(msg||'评论创建成功', msg?1:0 );
        }
    },

    destroy: async(ctx)=>{
        const {id} = ctx.params;
        const msg = await CommentsService.destroyComments(id);
        ctx.response.status = 200
        ctx.body = res.msg(msg||'评论删除成功', msg?1:0 );
    },

    update: async(ctx)=>{
        const getId = ctx.params.id
        const getData = ctx.request.body;
        const msg = await CommentsService.updateComments(getId,getData);
        ctx.response.status = 200
        if(typeof(msg)==='object'){
            ctx.body = res.json(msg,'评论更改成功');
        }else{
            ctx.body = res.msg(msg||'评论更改成功', msg?1:0 );
        }
    },

    detail: async (ctx)=>{
        const {id} = ctx.params;
        const msg =  await CommentsService.detailComments(id);
        ctx.response.status = 200
        if(typeof(msg)==='object'){
            ctx.body = res.json(msg,'查找评论详情成功');
        }else{
            ctx.body = res.msg(msg,1);
        }
    },

    //获取评论列表
    list:async(ctx)=>{
        const page = ctx.query.page;
        const commentsList = await CommentsService.getCommentsList(page);
        ctx.response.status = 200
        ctx.body = res.json(commentsList,'获取评论列表成功');
    },

    //根据文章id获取评论
    getArticleComments:async(ctx)=>{
        const {article_id} = ctx.params;
        const {page, desc} = ctx.query;
        const commentsList = await CommentsService.getArticleComments(article_id, page, desc);
        ctx.response.status = 200
        if(typeof(commentsList)==='object'){
            ctx.body = res.json(commentsList,'评论获取成功');
        }else{
            ctx.body = res.msg(commentsList,1);
        }
    },



}