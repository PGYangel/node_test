/**
 * koa中文文档：https://wizardforcel.gitbooks.io/koa-doc/content/index.html
 * */

const Koa=require('koa'),
    app=new Koa(),
    routers=require('./routers/index'),
    router=require('koa-router')(),
    static=require('koa-static'),
    cors=require('./public/cors'),
    jsdoc=require('./jsdoc')();

//静态文件配置
app.use(static(__dirname+'/static'));
//跨域配置
app.use(cors);

// 生成swagger接口文件
router.get('/swagger.json',async (ctx)=>{
    ctx.set('Content-Type','application/json')
    ctx.body=jsdoc
})

app.use(routers.routes())
    .use(routers.allowedMethods())
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(7016,()=>{
    console.log('http://webs.yr.dev.q1.com')
})
