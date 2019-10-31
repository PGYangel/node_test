/*
* 读取文件
* */

var fs= require('fs');

/*异步读取*/
fs.readFile('readtest.txt',function(err,data){
    if(err){
        return console.error(err);
    }
    console.log('读取内容：'+data.toString());
});

// 同步读取
var data = fs.readFileSync('readtest.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");


