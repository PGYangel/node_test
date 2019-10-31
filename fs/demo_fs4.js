/*
* 写入文件
* fs.writeFile(file, data[, options], callback)
* file - 文件名或文件描述符。

data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。

options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'

callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
* */

var fs= require('fs');

var wStr=`var txt="测试";
alert(txt)
`;

fs.writeFile('writetest.js',wStr,function(err){
    if(err){
        return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------");
    console.log("读取写入的数据！");
    fs.readFile('writetest.js', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("异步读取文件数据: " + data.toString());
    });
});

