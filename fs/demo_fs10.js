/*
* 读取目录
* fs.readdir(path, callback)
path - 文件路径。

callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。
* */
var fs=require('fs');

fs.readdir(__dirname+'/',function(err,files){
    if(err){
        return console.error(err);
    }
    files.forEach(function(file){
       console.log(file)
    });
});
