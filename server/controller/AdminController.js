const AdminService = require('../service/AdminService')
const {Resolve} = require('../lib/helper');
const res = new Resolve();

module.exports = {

    register: async (ctx) => {
        const msg = await AdminService.register(ctx.request.body);
        ctx.body = res.msg(msg||'用户创建成功', msg?1:0 );
    },

    login: async (ctx) => {
        const token = await AdminService.login(ctx.request.body);
        // console.log(token.length)
        if(token.length>0&&token.length<100){
            ctx.body = res.msg(msg||'登录失败', msg?1:0 );
        }else{
            ctx.body = {
                code: 200,
                msg: '登录成功',
                errorCode: 0,
                token: "Bearer " + token
            }
        }
    },
}