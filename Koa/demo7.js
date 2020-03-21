const Koa=require('koa'),
    app=new Koa(),
    router=require('koa-router')(),
    session=require('koa-session')

//配置session
app.keys = ['some secret hurr'];//cookies的签名
const CONFIG = {
    key: 'koa:sess',   //cookie key (default is koa:sess)默认可以不用修改
    maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
    overwrite: true,  //是否可以overwrite    (默认default true)
    httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
    signed: true,   //签名默认true
    rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
    renew: false  //(boolean) 当会话快到期时续订会话,
};
app.use(session(CONFIG, app));

router.get('/',async (ctx)=>{
    //设置session
    ctx.session.username='张三'
});
router.get('/news',async (ctx)=>{
    //获取session
    console.log(ctx.session.username)
});

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)