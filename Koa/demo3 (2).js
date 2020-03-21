/*
* koa的中间件跟express的中间件类似
* 中间件的作用有：
* 执行任何代码
* 修改请求和响应对象
* 终结请求-响应循环
* 调用堆栈中的下一个中间件
*
* 如果get、post回调函数中没有next参数，那么就匹配第一个路由。如果要往下匹配必须要有next()。
*
* 中间件分类：
* 应用级中间件
* 路由级中间件
* 错误处理中间件
* 第三方中间件
* */

const router =require('koa-router')();
const Koa=require('koa');
const app=new Koa();

//使用应用级中间件在匹配所有路由的时候打印当前时间
//应用级中间件在任何位置编写都会先执行，然后再匹配路由
app.use(async (ctx,next)=>{
    console.log(new Date());
    // ctx.body='这是个应用级中间件'
    await next();//如果没有这个next()，那么下面的路由匹配将不会执行，因为这里已经匹配到了

    // 错误中间件处理页面错误
    if(ctx.status==404){
        ctx.body='这是404页面'
    }else{
        console.log(ctx.url);
    }
})

router.get('/',async (ctx)=>{
    ctx.body="首页"
}).get('/news',async (ctx,next)=>{
    //路由集中间件
    console.log('进入了news的中间件')
    await next()
}).get('/news',async (ctx)=>{
    ctx.body='新闻'
})

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)


