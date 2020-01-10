//const env = process.env.NODE_ENV || 'development';
module.exports = {    

    /**
     * koa2
     */
    server_host : '127.0.0.1',
    server_port : 6720,//服务器端口号


    /**
     * jsonwebtoken
     */
    jwt_secret: 'xanas',
    expiresIn: '1h',


     /*/**
     * @数据库配置
     */
    mysql:{

        dbName: 'myblog', // 使用哪个数据库
        username: 'root', // 用户名
        password: '123456', // 口令
        host: 'localhost', // 主机名
        port: 3306, // 端口号，MySQL默认3306
        dialect: 'mysql',//使用的数据库
    },

    unlessPath: [ //url白名单 如果不设置默认都是没权限访问的,会返回{code:401}
        /^\/api\/registe/, //注册
        // /^\/api\/userLoginForSysAdmin/ //登录
    ]
}




//const env = process.env.NODE_ENV || 'production';