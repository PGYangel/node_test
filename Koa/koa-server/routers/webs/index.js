const router = require('koa-router')();

router.prefix('/webs');

router.get('/',async (ctx)=>{
    ctx.body='外网web管理模块'
});

module.exports = router
