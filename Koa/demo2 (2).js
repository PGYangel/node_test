//先安装koa-router：npm i koa-router --save
//引用koa-router有两种方式
/*常规版
* const Router=require('koa-router);
* const router=new Router()
* */
//简写版，后面加()直接实例化
const router = require('koa-router')();
const Koa=require('koa')
const app=new Koa()

//设置路由
router.get('/',async (ctx,next)=>{
    ctx.body='首页'
}).get('/news',async (ctx,next)=>{
    ctx.body='新闻页面'
    //获取get请求参数数据，两种方法，query和querystring。
    //这两个方法都是来自ctx.request里面的，可以省略request
    console.log(ctx.query);//获取的是一个对象，最常用的方式
    console.log(ctx.querystring);//获取的是一个字符串
    //ctx.request里面还有其他很多请求参数可获取
    console.log(ctx.request);
}).get('/content/:id',async (ctx,next)=>{
    //动态路由
    //使用ctx.params获取动态路由参数
    console.log(ctx.params)
    ctx.body='内容区域'
}).get('/content/:id/:name',async (ctx,next)=>{
    //可以设置多个动态参数
    console.log(ctx.params);
    ctx.body='内容区域2'
})

//koa使用中间件加载路由
app
    .use(router.routes())       //启动路由
    .use(router.allowedMethods())   //建议配置，会自动配置响应头

app.listen(3000)

