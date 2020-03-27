const router = require('koa-router')();

router.prefix('/projects');

router.get('/',async (ctx)=>{
    ctx.body='项目模块'
});

module.exports = router
