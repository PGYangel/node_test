const express=require('express');
const router=express.Router();

router.get("/",function(req,res){
    res.send('登录页面');
});
router.get("doLogin",function(req,res){

});

module.exports=router;
