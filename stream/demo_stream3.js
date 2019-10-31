/*
* 管道流
* 我们把文件比作装水的桶，而水就是文件里的内容，
* 我们用一根管子(pipe)连接两个桶使得水从一个桶流入另一个桶，
* 这样就慢慢的实现了大文件的复制过程。
* */

var fs=require('fs');

//创建一个可读流
var readerStream=fs.createReadStream('test.txt');

//创建一个可写流
var writerStream=fs.createWriteStream('output.txt');

//管道读写操作
//读取test.txt文件内容，并将内容写入到output.txt文件中
readerStream.pipe(writerStream);
//通过管道输入进去的内容会把原来内容覆盖掉。



