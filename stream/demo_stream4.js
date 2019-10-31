/*
* 链式流
* 链式是通过连接输出流到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作。
* 接下来我们就是用管道和链式来压缩和解压文件。
* */

// 压缩文件
var fs=require('fs');
var zlib=require('zlib');

//压缩test.txt文件为test.txt.gz
fs.createReadStream('test.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('test.txt.gz'));

console.log('压缩完毕');


