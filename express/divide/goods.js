const express=require('express');
const router=express.Router();

router.get('/',function(req,res){
    res.send('商品页面')
});
router.get('/add',function(req,res){
    res.send('添加商品页面')
});
router.get('/delete',function(req,res){
    res.send('删除商品页面')
});

module.exports=router;
