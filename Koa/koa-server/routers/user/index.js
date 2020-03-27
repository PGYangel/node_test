const router = require('koa-router')(),
    test = require('./test')


router.use(test.routes())
router.prefix('/user');

router.get('/', async (ctx) => {
    ctx.body='用户列表'
});

router.get('/add', async (ctx) => {
    ctx.body = '添加用户'
});

router.get('/update', async (ctx) => {
    ctx.body = '添加用户'
});

module.exports = router
