const { CategoryService } = require('../service/CategoryService')
const {Resolve} = require('../lib/helper');
const res = new Resolve();

module.exports = {

    create: async (ctx) => {
        const getData = ctx.request.body;
        const msg = await CategoryService.createCategory(getData);
        ctx.response.status = 200
        ctx.body = res.msg(msg||'创建分类成功', msg?1:0 );
    },

    destroy: async(ctx)=>{
        const getId = ctx.params;
        const msg = await CategoryService.destroyCategory(getId)
        ctx.response.status = 200
        ctx.body = res.msg(msg||'分类删除成功', msg?1:0 );
    },
    
    update: async(ctx)=>{
        const getId = ctx.params.id
        const getData = ctx.request.body;
        const msg = await CategoryService.updateCategory(getId,getData);
        console.log(msg)
        ctx.response.status = 200
        ctx.body = res.msg(msg||'分类更新成功', msg?1:0 );
    },

    detail: async (ctx)=>{
        const { id } = ctx.params;
        const msg =  await CategoryService.detailCategory(id);
        ctx.response.status = 200
        console.log(msg)
        if(typeof(msg)==='object'){
            ctx.body = res.json(msg,'成功查找分类详情');
        }else{
            ctx.body = res.msg(msg,1);
        }
    },

    /**
     * 获取所有分类的列表
     */
    list: async(ctx)=>{
        const data = await CategoryService.getCategoryList();
        ctx.response.status = 200
        ctx.body = res.json(data,'成功获取分类列表');
    },

    /**
     * 获取一个分类下的文章
     */
    article:async(ctx)=>{
        const {id} = ctx.params;
        const msg = await CategoryService.getCategoryArticle(id);
        ctx.response.status = 200
        ctx.body = res.json(msg,'成功获取分类下所有文章');
    }

}