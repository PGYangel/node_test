// koa处理post请求
// router.post('/path', async fn)
// 用post请求处理URL时，我们会遇到一个问题：post请求通常会发送一个表单，或者JSON，它作为request的body发送，
// 但无论是Node.js提供的原始request对象，还是koa提供的request对象，都不提供解析request的body的功能！
// 所以，我们又需要引入另一个middleware来解析原始request请求，然后，把解析后的参数，绑定到ctx.request.body中。
// koa-bodyparser就是用来干这个活的。
const Koa=require('koa');
const router=require('koa-router')();
const bodyParser=require('koa-bodyparser');
const app=new Koa();

//在合适的位置加上：app.use(bodyParser());
//由于middleware的顺序很重要，这个koa-bodyparser必须在router之前被注册到app对象上。
app.use(bodyParser());

router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
});

router.post('/signin', async (ctx, next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});

app.use(router.routes());

//监听3000端口
app.listen(3000,function(){
    console.log('http://localhost:3000');
});
