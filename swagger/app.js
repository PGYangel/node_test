const path=require('path');
const express=require('express');
const app=express();

// 建立swagger-ui的静态路由
app.use('/swagger',express.static(path.join(__dirname,'swaggerui')));

app.listen(3000,()=>{
   console.log('http://localhost:3000/swagger')
});
