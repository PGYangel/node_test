//获取post数据需要中间件koa-bodyparser，先安装：npm i koa-bodyparser --save
const Koa=require('koa'),
    app=new Koa(),
    static=require('koa-static'),
    router=require('koa-router')(),
    bodyparser=require('koa-bodyparser');

app.use(static(__dirname+'/static'));
app.use(bodyparser())//使用中间件bodyparser

router.post('/ps',(ctx)=>{
    //使用ctx.request.body获取post表单数据
    ctx.body=ctx.request.body
});

app.use(router.routes())
    .use(router.allowedMethods());
app.listen(3000)