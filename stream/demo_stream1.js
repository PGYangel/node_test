/*
* 从流中读取数据
* */
var fs=require('fs');
var data='';
//创建可读流
var readerStream=fs.createReadStream('test.txt');

//设置编码为utf8
readerStream.setEncoding('UTF8');

//处理流事件：data,end,error
readerStream.on('data',function(chunk){
    console.log('a');
    data+=chunk;
});

readerStream.on('end',function(){
    console.log(data);
});

readerStream.on('error',function(err){
    console.log(err.stack);
});
