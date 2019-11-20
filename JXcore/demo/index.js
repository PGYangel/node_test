var express=require('express');
var app=express();

app.get('/',function(req,res){
    console.log('hello world');
    res.send('hello world');
    res.end();
});

app.listen(3000);
