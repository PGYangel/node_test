/*
* 写入流
* */

var fs=require('fs');
var data='写入流测试数据';

// 创建一个可以写入的流，写入到文件output.txt中
var writerStream=fs.createWriteStream('output.txt');

//使用utf8编码写入数据
writerStream.write(data,'UTF8');
//注：write写入数据会完全代替之前文件内的内容。

//标记文件末尾
writerStream.end();

//处理流事件：finish,error

writerStream.on('finish',function(){
    console.log('写入完成')
});

writerStream.on('error',function(err){
    console.log(err.stack)
});


