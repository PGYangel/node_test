const router=require('koa-router')();

router.prefix('/test')
router.get('/t',async (ctx) =>{
    ctx.body={
        txt:'子模块测试'
    }
})

router.post('/p',async (ctx)=>{
    ctx.body={
        txt:'post请求成功'
    }
})

router.put('/u',async (ctx)=>{
    ctx.body={
        txt:'put操作成功'
    }
})

router.delete('/d',async (ctx)=>{
    ctx.body={
        txt:'delete操作成功'
    }
})


module.exports=router
