/*
静态文件
Express 提供了内置的中间件 express.static 来设置静态文件
* */
var express=require('express');
var app=express();

app.use('/public', express.static('static'));

app.get('/', function (req, res) {
    res.send('Hello World');
})

app.listen(8080, function () {
    console.log('http://localhost:8080/')
});

// 访问http://localhost:8080/public/img/p1.jpg，可以浏览到p1.jps图片
