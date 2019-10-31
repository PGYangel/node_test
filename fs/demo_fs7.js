/*
* 截取文件
* fs.ftruncate(fd, len, callback)
fd - 通过 fs.open() 方法返回的文件描述符。

len - 文件内容截取的长度。

callback - 回调函数，没有参数。
* */

var fs=require('fs');
var buf=new Buffer.alloc(1024);

fs.open('writetest.js','r+',function(err,fd){
    if(err){
        return console.error(err);
    }

    console.log('开始读取文件');
    console.log("截取10字节内的文件内容，超出部分将被去除。");
    fs.ftruncate(fd,10,function(err){
        if (err){
            console.log(err);
        }
        console.log("文件截取成功。");
        fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
            if (err){
                console.log(err);
            }

            // 仅输出读取的字节
            if(bytes > 0){
                console.log(buf.slice(0, bytes).toString());
            }

            // 关闭文件
            fs.close(fd, function(err){
                if (err){
                    console.log(err);
                }
                console.log("文件关闭成功！");
            });
        });
    });
});
