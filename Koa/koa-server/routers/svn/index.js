const router = require('koa-router')();

router.prefix('/svn');

router.get('/',async (ctx)=>{
    ctx.body='svn资源管理模块'
});

module.exports = router
