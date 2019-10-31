/*
* 缓冲区裁剪
* buf.slice([start[, end]])
start - 数字, 可选, 默认: 0
end - 数字, 可选, 默认: buffer.length
返回一个新的缓冲区，它和旧缓冲区指向同一块内存，但是从索引 start 到 end 的位置剪切。
* */

var buf1=Buffer.from('abcdef');

var buf2=buf1.slice(1,3);

console.log(buf2.toString())
