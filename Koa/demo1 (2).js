//开始最简单的koa应用
//先npm安装koa：npm i koa --save

//引入koa
const Koa=require('koa')
//实例化koa
const app=new Koa();

//使用中间件创建路由
app.use(async (ctx)=>{
    //ctx参数包含了express里面的request和response内容。
    //ctx.body = ctx.response.body = express里面的response.send
    ctx.body='首页'
})

//建立监听端口
app.listen(3000)
