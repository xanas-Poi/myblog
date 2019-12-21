const Koa = require('koa');
const app = new Koa();
const router = require('./router');
const { server_port } = require('./config');
const middleware = require('./middleware/index');



middleware(app);
router(app);


app.listen(server_port,()=>{
    console.log(`serve in running at http://localhost:${server_port}`);
});