const Router = require('koa-router');
const ArticleCtrl = require('./controller/ArticleController');
const AdminCtrl = require('./controller/AdminController')
const CommentsCtrl = require('./controller/CommentsController')
const CategoryCtrl = require('./controller/CategoryController')



module.exports = (app) =>{

    const router = new Router()
    const apiRouter = new Router()

    router.get('/',(ctx)=>{
        ctx.body = `hello !`
    })


    apiRouter.get('/admin/info',AdminCtrl.getInfo);  // 获取用户 信息
    apiRouter.post('/admin/register',AdminCtrl.register);  // 用户 注册
    apiRouter.post('/admin/login',AdminCtrl.login);   // 用户 登录

    
    apiRouter.get('/article/list',ArticleCtrl.list);   // 查询文章列表
    apiRouter.post('/article/create',ArticleCtrl.create);   // 增加文章
    apiRouter.delete('/article/destroy/:id',ArticleCtrl.destroy);    // 删除文章
    apiRouter.put('/article/update/:id',ArticleCtrl.update);    // 更新文章
    apiRouter.get('/article/detail/:id',ArticleCtrl.detail);  //文章详情
    
    apiRouter.get('/article/echarts',ArticleCtrl.echarts);  //echart数据
    

    apiRouter.post('/comments/create',CommentsCtrl.create);  //评论创建
    apiRouter.delete('/comments/destroy/:id',CommentsCtrl.destroy);  //评论删除
    apiRouter.put('/comments/update/:id',CommentsCtrl.update);  //评论更新
    apiRouter.get('/comments/detail/:id',CommentsCtrl.detail);  //评论详情
    apiRouter.get('/comments/list',CommentsCtrl.list);      //获取评论列表 10条/页 query : page
    apiRouter.get('/article/:article_id/comments',CommentsCtrl.getArticleComments);  //article_id文章下的评论 10条/页

    
    apiRouter.post('/category/create',CategoryCtrl.create);   // 增加分类
    apiRouter.delete('/category/destroy/:id',CategoryCtrl.destroy);    // 删除分类
    apiRouter.put('/category/update/:id',CategoryCtrl.update);    // 更新分类
    apiRouter.get('/Category/detail/:id',CategoryCtrl.detail);  //详情分类
    apiRouter.get('/category/list',CategoryCtrl.list);   // 获取所有分类的列表
    apiRouter.get('/category/:id/article',CategoryCtrl.article);   // 获取一个分类下的文章


    router.use('/api', apiRouter.routes(), apiRouter.allowedMethods())
    app.use(router.routes()).use(router.allowedMethods())



}