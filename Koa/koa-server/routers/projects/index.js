const router = require('koa-router')();

router.prefix('/log');

router.get('/',async (ctx)=>{
    ctx.body='日志模块'
});

module.exports = router
