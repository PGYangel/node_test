/*
* cookie管理
* */

var express=require('express');
var cookieParser=require('cookie-parser');
var util=require('util');

var app =express();
app.use(cookieParser());

app.get('/',function(req,res){
    console.log('cookie'+util.inspect(req.cookies));
    res.end()
});

app.listen(8080);

