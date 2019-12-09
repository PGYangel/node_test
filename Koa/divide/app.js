const Koa=require('koa');
const bodyParser=require('koa-bodyparser');
const app=new Koa();
app.use(bodyParser());
// 导入controller middleware:
const controller = require('./controller');
// 使用middleware:
app.use(controller());

//监听3000端口
app.listen(3000,function(){
    console.log('http://localhost:3000');
});
