/*
* 写入缓冲区
* buf.write(string[, offset[, length]][, encoding])
string - 写入缓冲区的字符串。
offset - 缓冲区开始写入的索引值，默认为 0 。
length - 写入的字节数，默认为 buffer.length
encoding - 使用的编码。默认为 'utf8' 。

返回值
返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。
* */

let buf=Buffer.alloc(256);
//中文占用2字节空间
let len=buf.write('test test 我');
console.log('写入字节数：'+len);
console.log(buf);
//默认会从索引0开始写入，后面索引值不影响
let len3=buf.write('aaa');
console.log('写入字节数：'+len3);
console.log(buf);


//多出部分不会被写入
let buf2=Buffer.alloc(5);
let len2=buf2.write('aaaaaaaaa');
console.log(len2);
console.log(buf2);
