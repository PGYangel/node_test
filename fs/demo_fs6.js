/*
* 关闭文件
* fs.close(fd, callback)
fd - 通过 fs.open() 方法返回的文件描述符。
callback - 回调函数，没有参数。
* */
var fs=require('fs');
var buf=new Buffer.alloc(1024);

fs.open('writetest.js','r+',function(err,fd){
    if(err){
        return console.error(err);
    }

    console.log('开始读取文件');
    fs.read(fd,buf,0,buf.length,0,function(err,bytes){
        if(err){
            console.error(err);
        }
        console.log(bytes+'字节被读取');

        //输出读取的字节
        if(bytes>0){
            console.log(buf.slice(0,bytes).toString());
        }

        // 关闭文件
        fs.close(fd, function(err){
            if (err){
                console.log(err);
            }
            console.log("文件关闭成功");
        });
    });
});
