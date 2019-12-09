// koa处理get请求
// router.get('/path', async fn)
const Koa=require('koa');
// require('koa-router')返回的是一个函数，后面需要加()执行。
const router=require('koa-router')();
const app=new Koa();

app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

router.get('/hello/:name', async (ctx,next)=>{
    //http://localhost:3000/hello/abc
    //会获取到abc这个参数
    let name=ctx.params.name;
    ctx.response.body=`<h1>${name}</h1>`
});

router.get('/',async (ctx,next)=>{
    ctx.response.body = '<h1>Index</h1>'
});

// 将路由信息加到koa中
app.use(router.routes());

//监听3000端口
app.listen(3000,function(){
    console.log('http://localhost:3000');
});


