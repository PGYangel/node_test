//路由整合
const express=require('express');
const router =express.Router();

const route1=require('./route1.js');
router.use('/',route1);

module.exports=router;
