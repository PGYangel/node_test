/*路由*/
var express=require('express');
var app=express();

// 主页输出"Hello World"
app.get('/',function(req,res){
    console.log('主页get请求');
    res.send('Hello World');
});

// post请求
app.post('/',function(req,res){
    console.log('主页post请求');
    res.send('Hello POST');
});

// /list_user页面get请求
app.get('/list_user',function(req,res){
    console.log('list_user页面get请求');
    res.send('用户列表')
});

// 对页面abcd,abxcd,ab123cd等页面进行get请求
app.get('/ab*cd',function(req,res){
    console.log('/ab*cd请求');
    res.send('正则路由')
});

app.listen(8080,function(){
    console.log('http://localhost:8080/')
});
