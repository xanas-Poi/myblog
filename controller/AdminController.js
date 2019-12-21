const AdminService = require('../service/AdminService')
const {Resolve} = require('../lib/helper');
const res = new Resolve();

module.exports = {

    register: async (ctx) => {
        const getData = ctx.request.body;
        const msg = await AdminService.register(getData);
        ctx.response.status = 200
        ctx.body = res.msg(msg||'用户创建成功', msg?1:0 );
    },

    login: async (ctx) => {
        const getData = ctx.request.body;
        const token = await AdminService.login(getData);
        ctx.response.status = 200
        console.log(token.length)
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

    getInfo: async(ctx)=>{
        const getData = ctx.request.body;
        const msg = await AdminService.getInfo(getData);
        ctx.response.status = 200
        if(typeof(msg)==='object'){
            ctx.body = res.json(msg,'获取用户信息成功');
        }else{
            ctx.body = res.msg(msg,1);
        }
    },

}