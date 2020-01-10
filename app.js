const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const { server_port } = require('./server.base.config');
const middleware = require('./middleware/index');

middleware(app);
router(app);


app.listen(server_port,()=>{
    console.log(`server in running at http://localhost:${server_port}`);
});