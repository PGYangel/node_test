const router = require('koa-router')(),
    user = require('./user/index'),
    log = require('./log/index'),
    projects = require('./projects/index'),
    svn = require('./svn/index'),
    webs = require('./webs/index'),
    mysql = require('../mysql/index'),
    mongo = require('../mongodb/index'),
    bodyparser = require('koa-bodyparser'),//获取post数据
    kbody = require('koa-body'),//获取文件数据
    session = require('koa-session'); //设置session

router.use(user.routes())
router.use(log.routes())
router.use(projects.routes())
router.use(svn.routes())
router.use(webs.routes())


router.get('/', async (ctx) => {
    ctx.body = {
        title: '欢迎使用接口'
    }
})

//mysql测试
router.get('/mysql', async (ctx) => {
    try {
        // 防sql注入进行参数编码
        // var param=mysql.escape('admin')
        var param = 'admin'
        //使用问号占位，自动进行参数编码
        const result = await mysql.query(`select * from users where userName=? limit 0,10`, [param]);
        ctx.body = result;
    } catch (e) {
        ctx.body = e;
    }
});

//mongodb测试
router.get('/mongo', async (ctx) => {
    try {
        const db = await mongo.connect('test')
        const dbo = db.db('test')
        const data = await new Promise((resolve,reject)=>{
            dbo.collection("mytable1").find({}).toArray((err, result) =>{ // 返回集合中所有数据
                if (err) reject(err);
                resolve(result)
                db.close();
            });
        })
        ctx.body = data;
    } catch (e) {
        ctx.body = e
    }
})

module.exports = router

