/*
* 缓冲区合并
* Buffer.concat(list[, totalLength])
list - 用于合并的 Buffer 对象数组列表。
totalLength - 指定合并后Buffer对象的总长度。
返回值
返回一个多个成员合并的新 Buffer 对象。
* */

var buf1=Buffer.from('aaa');
var buf2=Buffer.from('bbb');
var buf3=Buffer.concat([buf1,buf2]);
var buf4=Buffer.concat([buf1,buf2],5);
console.log(buf3);
console.log(buf4);

