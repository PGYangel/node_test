const path=require('path');
const express=require('express');
const app=express();
const jsdoc=require('./jsdoc.js');
const router=require('./routes/sortRoute.js');

// 执行api文档生成方法，将返回的json数据赋值给变量swaggerObj
let swaggerObj=jsdoc();

// 建立swagger-ui的静态路由
app.use('/swagger',express.static(path.join(__dirname,'swaggerui')));
// 获取整合好的路由
app.use('/',router);

// 创建一个路由地址输出swaggerObj变量值,swaggerui里面的引用路径即这里生成的接口数据
app.get('/swagger.json',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerObj);
});

app.listen(3000,()=>{
   console.log('http://localhost:3000/swagger')
});
