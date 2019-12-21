const path = require('path');
const ip = require('ip');
const bodyParser = require('koa-bodyparser');
// var koajwt = require('koa-jwt');
// const miHttpError = require('./mi-http-error');
const misend = require('./mi-send');
const miLog = require('./mi-log/logger')
// const { jwt_secret } = require("../config");

const cors = require("koa2-cors");


module.exports = (app) => {

    
    app.use(cors());

    // app.use(miHttpError({
    //     errorPageFolder: path.resolve(__dirname, '../errorPage')
    // }));

    app.use(miLog({
        env: app.env,  // koa 提供的环境变量
        projectName: 'koa2-tutorial',
        appLogLevel: 'debug',
        dir: 'logs',
        serverIp: ip.address()
    }));

    // app.use((ctx, next) => {
    //     return next().catch((err) => {
    //         if(err.status === 401){
    //             ctx.status = 401;
    //             ctx.body = '登录已过期';
    //         }else{
    //             throw err;
    //         }
    //     })
    // })
    // app.use(koajwt({
    //     secret: jwt_secret
    // }).unless({
    //     path: [/\/api\/admin\/login/]
    // }));

    app.use(bodyParser());
    app.use(misend());//koa-json 发送数据格式位JSON/
}