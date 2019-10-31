/*
* 缓冲区比较
* buf.compare(otherBuffer);
* otherBuffer - 与 buf 对象比较的另外一个 Buffer 对象。
* 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
* */

var buf1=Buffer.from('abc45');
var buf2=Buffer.from('abc456');
var result=buf1.compare(buf2);

console.log(result);

if(result < 0) {
    console.log(buf1 + " 在 " + buf2 + "之前");
}else if(result === 0){
    console.log(buf1 + " 与 " + buf2 + "相同");
}else {
    console.log(buf1 + " 在 " + buf2 + "之后");
}
