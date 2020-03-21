//先安装中间件：npm i koa-static --save
const Koa = require('koa')
const app = new Koa()
const static = require('koa-static')
const router = require('koa-router')()


app.use(static(__dirname + '/static'))

router.get('/', async (ctx) => {
    ctx.body='首页'
})

app.use(router.routes())
    .use(router.allowedMethods())
app.listen(3000)