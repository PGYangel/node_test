const express =require("express");
const app=express();
const router=require('./routerComm.js');

app.use('/',router);
app.listen(3000,function(){
   console.log('http://localhost:3000/');
});
