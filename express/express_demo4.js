/*
* 实现如下内容：
* get方法
* post方法
* 文件上传
* */

var express = require('express');
var app=express();
var bodyParser=require('body-parser');
var fs=require('fs');
var multer =require('multer');


// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);
app.use(multer({dest:'/tmp/'}).array('image'));

// get方法
app.get('/demo4.html',function (req,res){
    res.sendfile(__dirname + "/" + "demo4.html");
});

app.get('/process_get',function(req,res){
    // 输出JSON格式
    var response={
        'name1':req.query.name1,
        'name2':req.query.name2
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

//post方法
app.post('/process_post',urlencodedParser,function(req,res){
    // 输出JSON格式
    var response={
        'name1':req.body.name1,
        'name2':req.body.name2
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

//上传文件
app.post('/file_upload',function(req,res){
    console.log(req.files[0]);//上传信息
    var des_file=__dirname+'/'+req.files[0].originalname;
    fs.readFile(req.files[0].path,function(err,data){
        fs.writeFile(des_file,data,function(err){
            if(err){
                console.log(err);
            }else{
                response={
                  message:'file uploaded successfully',
                  filename:req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

var server =app.listen(8080,function(){
    console.log('http://localhost:8080/')
});
