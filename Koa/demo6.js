//使用ctx.cookies.set()设置cookies
//使用ctx.cookies.get()获取cookies
//koa的cookies中文不支持，需要将中文转义成base64码存储

const Koa = require('koa'),
    app = new Koa(),
    router = require('koa-router')()

router.get('/', (ctx) => {
    ctx.body='首页'
    //中文信息需要转码为base64进行存储
    let str='中文信息'
    let base64= Buffer.from(str).toString('base64')
    ctx.cookies.set('userinfo',base64,{
        maxAge:1000*60*60
    })
    /*
    第三个参数设置有：
    maxAge      设置多少毫秒后过期
    expires     设置过期日期
    path        默认是“/”，设置cookies应用路径
    domain      设置cookies应用域名
    secure      默认是false，设置为true时只有https可以访问
    httpOnly    默认是true，是否只有服务端可访问，设置为false前端页面也可调用
    overwrite   默认是false，是否覆盖同名cookies
    * */
}).get('/news',(ctx)=>{
    ctx.body='新闻'
    //中文信息base64解码
    let data=ctx.cookies.get('userinfo')
    let str= Buffer.from(data,'base64').toString()
    console.log(str)
})

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000)